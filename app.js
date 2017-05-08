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
const appId      = "test2f2";

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
const iot_host    = `wss://${org}.messaging.internetofthings.ibmcloud.com:443`
  , iot_clientid  = `a:${org}:${appId}`;

var client = mqtt.connect(iot_host, {
      clientId: iot_clientid,
      username: apiKey,
      password: apiToken
    });

try {
  client.on('connect', function () {
    console.log("MQTT CONNECTED");

    // client.subscribe('presence')
    // client.publish('presence', 'Hello mqtt')
  });
} catch (e) {
  console.error(e);
}


client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());

  client.end()
});
/* ===== MQTT client --> END ===== */

/* ===== socket.io client - LIVE DATA ===== */
io.on('connection', (socket) => {
  console.log('user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('new-data', (message) => {
    console.log("New Data: ", message);

    io.emit('message', {type:'new-data', text: message});    
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