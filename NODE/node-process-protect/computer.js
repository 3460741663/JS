const http = require('http');
const { fork } = require('child_process');

const httpServer = http.createServer((req, res) => {
  if ( req.url === '/computer') {
    const childComputer = fork('./fork-computed.js');
    childComputer.send('open');
    childComputer.on('message', sum => {
      res.end(sum.toString());
    })
  } else {
    res.end('ok')
  }
})
httpServer.listen(2333, () => {
  console.log('server is running http://localhost:2333');
})
