// 1. node创建一个服务
// let http = require('http')

// let server = http.createServer((req, res) => {
//   res.end('hello world')
// })

// server.listen(3000, () => {
//   console.log('服务起来了')
// })

// 2. koa创建服务
// const Koa = require('koa')

// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello world'
// })

// app.listen(3000)

// 3. 自己创建的koa
const myKoa = require('./lib/application')

let app = new myKoa()

app.use((ctx, next) => {
  // console.log(ctx.req.url)
  // console.log(ctx.request.req.url)
  // console.log(ctx.response.req.url)
  // console.log(ctx.request.url)
  // console.log(ctx.request.path)
  // console.log(ctx.url)
  // console.log(ctx.path)
  // ctx.body = 'cabkufua'
  ctx.body = 'hello world !';
  console.log(ctx.body);
  next();
})
// __________use的使用例子
app.use((ctx, next) => {
  console.log(3);
  next();
  console.log(4)
})
app.use((ctx, next) => {
  console.log(5);
  next();
  console.log(6)
})
// __________

app.listen(3000)