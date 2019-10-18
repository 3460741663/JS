// let http = require('http')

// let server = http.createServer()

// server.on('request', (req, res) => {
//   res.end('hello world !')
// })

// server.listen(3000, () => {
//   console.log('server is runing 3000')
// })
const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.end('hello world !')
})
app.listen(3000, () => {
  console.log('server is running 3000')
})