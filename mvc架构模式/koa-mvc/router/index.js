const KoaRouter = require('koa-router');
const registerController = require('../controller/register.js')
const router = new KoaRouter();
router.post('/login', async (ctx) => {
  // 
});
router.get('/register', registerController);
module.exports = router;