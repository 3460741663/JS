/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//   function step(x, y){
//     if(x ===0 || y === 0) return 1;
//     return step(x-1, y) + step(x, y -1);
//   }
//   return step(n-1, m -1);
// };
var uniquePaths = function(m, n) {
  // 从 0, 0 到 n-1, m-1推导出结果
  let dp = new Array(n).fill(null);
  for(let x = 0; x < n; x ++){
    if(dp[x] == null ) dp[x] = [];
    for(let y = 0; y < m; y ++){
      if(x === 0 || y === 0){
        dp[x][y] = 1
      }else{
        dp[x][y] = dp[x-1][y] + dp[x][y-1]
      }
    }
  }
  return dp[n-1][m-1]
}
console.log(uniquePaths(3,2))