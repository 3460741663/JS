const Koa = require('koa');
const app = new Koa();
const router = require('./router/index.js')
app.use(router.routes()).use(router.allowedMethods());
app.listen(3003, () => {
  console.log('server is running http://localhost:3003');
})
