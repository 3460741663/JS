const md5 = require('md5')
const {query} = require('../util/index.js')
// 注册
const insertDate = function(val) {
  console.log(val);
  // 数据库 mysql sequlize
  let sql = "insert into user_info(name, password) value (?, ?)";
  // 哈希算法
  // 输出固定的 不可逆 同样的输入 同样的输出
  // zhaomeng17 -> 哈希算法 -> 4327893
  return query(sql, [val.name, md5(val.password)]);
}
module.exports = {
  insertDate
}