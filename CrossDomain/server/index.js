const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaStatic = require('koa-static');
const app = new Koa();
const path = require('path');
app.use(KoaStatic(path.join(__dirname, './static')));

var router = new KoaRouter();
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET');
  ctx.set('Access-Control-Allow-Headers', 'x-custom, Content-Type');
  // 允许 是否发送 cookie ... 凭证
  ctx.set('Access-Control-Allow-Credentials', true);
  await next();
})
router.post('/api/books', (ctx, next) => {
  // ctx.router available
  console.log(123456);
  console.log(ctx.cookies.get('hello'));
  ctx.body = [
    { bookName: 'php 入门到精通'},
    { bookName: 'node 入门到精通'},
  ]
});
 
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
  console.log('serving is running http://localhost:3001')
})