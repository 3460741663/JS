const http = require('http')
const httpServer = http.createServer((req, res) => {
  res.end('http res');
  throw new Error('err 2333');
})
// window.on('error') // 前端 无论错误在哪，都可以通过window捕获到
process.on('uncaughtException', (err) => {
  console.log(err);
  process.send({ act:'dead' });
}) // 后端
process.on('message', function(name, socketServer) {
  if ( name == 'server') {
    socketServer.on('connection', (socket) =>{
      httpServer.emit('connection', socket)
    })
  }
})