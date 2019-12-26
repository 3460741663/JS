
// function parseToMoney(num){
//   num = parseFloat(num.toFixed(3));
//   // console.log(num);
//   let [integer, decimal] = String.prototype.split.call(num, '.');
//   // console.log(integer, decimal);
//   integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
//   return integer + (decimal ? '.' + decimal : '');
// }
console.log(parseToMoney(12345678), parseToMoney(1234.454))
function parseToMoney(str){
  let res = /(?=(?!\b)(\d{3})+$)/g
  // console.log(str)
  str = str.toString();
  return str.replace(res, ',')
}
