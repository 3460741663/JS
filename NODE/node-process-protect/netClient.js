const net = require('net');

const clientSocket = new net.Socket();

clientSocket.connect(8181, '127.0.0.1', function() {
  console.log('connet success');
  clientSocket.write('from client');
})
clientSocket.on('data', function(data) {
  console.log('client recive: ', data)
});