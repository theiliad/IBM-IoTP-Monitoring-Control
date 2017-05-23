const express         = require('express')
      , path          = require('path')
      , http          = require('http')
      , bodyParser    = require('body-parser')
      , proxy         = require('http-proxy-middleware')
      , socketServer  = require('socket.io')
      , mqtt          = require('mqtt')
      , iotf          = require('ibmiotf');

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


/* ===== IBM IoT Client Configs - START ===== */
var appClientConfig = {
  org:            basicConfig.org,
  id:             "test2f23f232",
  "domain":       "internetofthings.ibmcloud.com",
  "auth-key":     basicConfig.apiKey,
  "auth-token":   basicConfig.apiToken
};

var appClient = new iotf.IotfApplication(appClientConfig);

//setting the log level to trace. By default its 'warn'
appClient.log.setLevel('info');

var appClient = new iotf.IotfApplication(appClientConfig);
/* ===== IBM IoT Client Configs - END ===== */

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
  appClient.connect();

  appClient.on("connect", function () {
    console.log("IoTF client connected to MQTT");

    // appClient.subscribeToDeviceEvents("myDeviceType","device01","+","json");

    console.log(devicesToSubscribeTo);

    if (devicesToSubscribeTo.length > 0) {
      for (deviceId of devicesToSubscribeTo) {
        appClient.subscribeToDeviceEvents("iot-conveyor-belt", deviceId, "sensorData", "json");

        console.log(`Subscribed to ${deviceId}`);
      }

      devicesToSubscribeTo = [];
    }

    io.emit('message', {
      type:'mqtt_status', text: {connected: true}
    });
  });

  appClient.on("deviceEvent", function (deviceType, deviceId, eventType, format, payload) {
      console.log("Device Event from :: " + deviceType + " : " + deviceId + " of event " + eventType + " with payload : " + payload);

      io.emit('message', {type: 'new_sensorData', text: payload.toString()});
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

  socket.on('mqtt_status_inquiry', (message) => {
    console.log("MQTT_STATUS_INQUIRY", appClient.isConnected ? "Connected" : "Disconnected");

    io.emit('message', {type:'mqtt_status', text: {connected: appClient.isConnected}});
  });

  socket.on('mqtt_set', (message) => {
    console.log("Set MQTT message: ", message);

    var payload = JSON.parse(message);
    
    if (appClient.isConnected) {
      console.log((payload.turnOn ? '' : 'Un-') + 'Subscribed' + (payload.turnOn ? ' to ' : ' from ') + `${payload.deviceId}`);

      if (payload.turnOn)   appClient.subscribeToDeviceEvents("iot-conveyor-belt", payload.deviceId, "sensorData", "json");
      else                  appClient.unsubscribeToDeviceEvents("iot-conveyor-belt", payload.deviceId, "sensorData", "json");
    } else if (!appClient.isConnected && payload.turnOn) {
      devicesToSubscribeTo.push(payload.deviceId);
    }
  });
});
/* ===== socket.io client --> END ===== */