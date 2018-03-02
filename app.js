const http = require('http');
const port = 3001;
const hostname = '127.0.0.1';
// const index = require('./index.html');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end('你好');
});

server.listen(port, () => {
  console.log(`打开浏览器，输入 http://${hostname}:${port}`);
});