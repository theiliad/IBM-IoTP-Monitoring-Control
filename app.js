const express = require('express')
      , path = require('path')
      , http = require('http')
      , bodyParser = require('body-parser')
      , proxy = require('http-proxy-middleware');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

const org = "hbvlsl";
const apiKey = "a-hbvlsl-znpivfiszs";
const apiToken = "z*kboI(YG5v&Z_2(0m";
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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));