/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  if(votes.length==1) return votes[0]
  // let res = [];
  let res = new Map();
  for (let i = 0; i < votes.length; i++) {
    let arr = [...votes[i]];
    for (let j = 0; j < arr.length; j++) {
      // console.log(arr[j])
      if (!res.get(arr[j])) {
        res.set(arr[j], new Array(votes[0].length).fill(0))
      }
      let temp = res.get(arr[j]); temp[j]++;
    }
  }
  var arrayObj = Array.from(res);
  arrayObj.sort(
    function (a, b) {
      for (let j = 0; j < a[1].length; j++) {
        if (a[1][j] != b[1][j]) return b[1][j] - a[1][j]
      }
      return a[0].localeCompare(b[0])
    }
  )
  let str = ''
  arrayObj.forEach(element => {
    str += element[0]
  });
  return str
}
console.log(rankTeams(["ZMNAGUEDSJYLBOPHRQICWFXTVK"]));

// let res = { A: [5, 0, 0], B: [0, 2, 3], C: [0, 3, 2] };
// var map = new Map()
// map.set("A", [5, 0, 0]);
// map.set("D", [0, 2, 3]);
// map.set("C", [0, 2, 2]);
// var arrayObj = Array.from(res);
// arrayObj.sort(
//   function (a, b) {
//     for (let j = 0; j < a[1].length; j++) {
//       if (a[1][j] != b[1][j]) return b[1][j] - a[1][j]
//     }
//     return a[0].localeCompare(b[0])
//   }
// )
// arrayObj.sort(function(a,b){return a[1]-b[1]})
// console.log(arrayObj)