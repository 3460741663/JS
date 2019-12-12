var fs = require('fs');
var http = require('http')
var server = http.createServer((req, res) => {
  if(req.url) {
    res.writeHead(200, {"content-type": "text/html"})
    const myreadstream = fs.createReadStream(__dirname + '/viws/http_demo.html', 'utf-8')
    myreadstream.pipe(res)
  }
})
server.listen(8888);
console.info('server is running in http://localhost:8888')
