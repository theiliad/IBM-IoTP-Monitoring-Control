const express         = require('express')
      , path          = require('path')
      , http          = require('http')
      , bodyParser    = require('body-parser')
      , proxy         = require('http-proxy-middleware')
      , socketServer  = require('socket.io')
      , mqtt          = require('mqtt');

var io;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'src/app/assets')));
app.use(express.static(path.join(__dirname, 'static')));

app.use('/assets/img/carbon-icons.svg', express.static(__dirname + '/node_modules/carbon-icons/dist/carbon-icons.svg'));

// IoT Platform Connectivity related info
var basicConfig;

function configureCredentials(config) {
	basicConfig = config;
}

try {
	var BASIC_CONFIG = require(__dirname + '/basicConfig.json');

  if (process.env.basicConfig) {
		configureCredentials(JSON.parse(process.env.basicConfig));
	} else {
		configureCredentials(BASIC_CONFIG);
	}
} catch (error) {
	console.log(error);
	console.log("Fallback to Bluemix VCAP_SERVICES");

	if (process.env.VCAP_SERVICES) {
		configureCredentials(JSON.parse(process.env.basicConfig));
	} else {
		console.log("ERROR: IoT Service was not bound!");
	}
}

const org         = basicConfig.org
    , apiKey      = basicConfig.apiKey
    , apiToken    = basicConfig.apiToken
    , appId       = "test2f23f232";

var mqttClient;

var socketsOpen          = [];
var devicesToSubscribeTo = [];

/* ===== Proxy calls to /api/** to the IBM IoT APIs ===== */
app.use('/api/**', proxy(
  {
    target: `https://${org}.internetofthings.ibmcloud.com/api/v0002`,
    changeOrigin: true,
    auth: `${apiKey}:${apiToken}`,
    // onProxyRes: function(proxyRes, req, res) {
    //     console.log(proxyRes.path);
    // },
    pathRewrite: {
      '^/api/' : ''
    }
  }
));

/* ===== MQTT client - LIVE DATA ===== */
const iot_host    = `wss://${org}.messaging.internetofthings.ibmcloud.com`
  , iot_clientid  = `a:${org}:${appId}`;

try {
  mqttClient = mqtt.connect(iot_host, {
    clientId:   iot_clientid,
    username:   apiKey,
    password:   apiToken,
    keepalive:  0
  });

  mqttClient.on('connect', function () {
    console.log("MQTT CONNECTED");
    // mqttClient.publish('presence', 'Hello mqtt')

    console.log(devicesToSubscribeTo);

    if (devicesToSubscribeTo.length > 0) {
      for (deviceId of devicesToSubscribeTo) {
        var topic = `iot-2/type/iot-conveyor-belt/id/${deviceId}/evt/sensorData/fmt/json`;

        mqttClient.subscribe(topic);

        console.log(`Subscribed to ${deviceId}`);
      }

      devicesToSubscribeTo = [];
    }

    io.emit('message', {
      type:'mqtt_status', text: {connected: true}
    });
  });

  mqttClient.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());

    // mqttClient.end()

    io.emit('message', {type: 'new_sensorData', text: message.toString()});
  });
} catch (e) {
  console.error("Connect Unsuccessful", e);
}
/* ===== MQTT mqttClient --> END ===== */



app.get('*', (req, res) => {
  res.sendFile(path.resolve('./static/index.html'));
});

const port = process.env.PORT || '3000';

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
  console.log(`APP running on localhost:${port}`);
});

io = socketServer(httpServer);



/* ===== socket.io client - LIVE DATA ===== */
io.on('connection', (socket) => {
  console.log(`Socket ${socket.id} connected`);

  socketsOpen.push(socket.id);

  console.log("Sockets Open: ", socketsOpen);
  
  socket.on('disconnect', function(){
    console.log(`Socket ${socket.id} disconnected`);

    var index = socketsOpen.indexOf(socket.id);
    socketsOpen.splice(index, 1);

    console.log("Sockets Open: ", socketsOpen);
  });
  
  socket.on('new-data', (message) => {
    console.log("New Data: ", message);

    io.emit('message', {type:'new-data', text: message});
  });

  socket.on('new-data', (message) => {
    io.emit('message', {type:'mqtt_status', text: {connected: mqttClient.isConnected}});
  });

  socket.on('mqtt_set', (message) => {
    console.log("Set MQTT message: ", message);

    var payload = JSON.parse(message);

    if (mqttClient.isConnected) {
      var topic = `iot-2/type/iot-conveyor-belt/id/${payload.deviceId}/evt/sensorData/fmt/json`;

      if (payload.turnOn)   mqttClient.subscribe(topic);
      else                  mqttClient.unsubscribe(topic);

      console.log((payload.turnOn ? `` : `Un-`) + `Subscribed` + (payload.turnOn ? ` to ` : ` from `) + `${payload.deviceId}`);
    } else if (!mqttClient.isConnected && payload.turnOn) {
      devicesToSubscribeTo.push(payload.deviceId);
    }

    // io.emit('message', {type:'new-data', text: message});    
  });
});
/* ===== socket.io client --> END ===== */