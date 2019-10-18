const userModer = require('../model/user-info.js')
const register = async (ctx) => {
  // register?user=123&passward=123
  console.log('注册');
  const user = ctx.query;
  console.log(user);
  // 插入数据库
  let insertRes = await userModer.insertDate(user);
  console.log('插入数据库的结果', insertRes);
  ctx.body = insertRes;
}
module.exports = register;