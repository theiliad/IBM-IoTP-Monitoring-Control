const express      = require('express')
      , path       = require('path')
      , http       = require('http')
      , bodyParser = require('body-parser')
      , proxy      = require('http-proxy-middleware')
      , io         = require('socket.io')(http)
      , mqtt       = require('mqtt');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

// IoT Platform Connectivity related info
const org        = "hbvlsl";
const apiKey     = "a-hbvlsl-znpivfiszs";
const apiToken   = "z*kboI(YG5v&Z_2(0m";
// const org        = "3v5whr";
// const apiKey     = "a-3v5whr-rapidl4k3r";
// const apiToken   = "v9efCU+4@bUnOWZlm8";
const appId      = "test2f23f232";

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

  socket.on('mqtt_set', (message) => {
    console.log("Set MQTT message: ", message);

    var payload = JSON.parse(message);
    var topic = `iot-2/type/iot-conveyor-belt/id/${payload.deviceId}/evt/sensorData/fmt/json`;

    if (payload.turnOn)   mqttClient.subscribe(topic);
    else                  mqttClient.unsubscribe(topic);

    console.log((payload.turnOn ? `` : `Un-`) + `Subscribed` + (payload.turnOn ? ` to ` : ` from `) + `${payload.deviceId}`);

    // io.emit('message', {type:'new-data', text: message});    
  });
});
/* ===== socket.io client --> END ===== */

io.listen(5000);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';

const server = http.createServer(app);

server.listen(port, () => console.log(`APP running on localhost:${port}`));