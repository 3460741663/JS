const Koa = require('koa');
const student = new Koa();
// const manage = new Koa();
// 中间件
// http://localhost:3000/a?a=1&b=2
// 中间件是一个方法，中间件
// 用户 request  -> middleWare1 -> middleWare2  ->  response 
student.use(async (ctx, next) => {
  console.log(ctx.path);
  console.log(ctx.query);
  ctx.body = 'hello world !';
  await next();
  console.log('middleWare1');
})
student.use(async (ctx, next) => {
  // console.log(ctx.path);
  // console.log(ctx.query);
  // ctx.body = 'hello world !';
  await next();
  console.log('middleWare2');
})
student.use(async (ctx, next) => {
  // console.log(ctx.path);
  // console.log(ctx.query);
  // ctx.body = 'hello world !';
  console.log('middleWare3');
})
student.listen(3000, () => {
  console.log('server is running 3000');
})