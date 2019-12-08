var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

function traversal(root) {
  console.log(root.value);
  if(typeof root.left !== 'undefined' && root){
    traversal(root.left);
  }
  if(typeof root.right !== 'undefined' && root){
    traversal(root.right);
  }
}

// traversal(tree);
// console.log(Math.pow(2,3));
function rectCover(number)
{
  if(number === 0) return 0;
  if(number === 1) return 1;
  if(number === 2) return 2;
  var x = 1, y = 2;
  var result = 0;
  while(number > 2){
    result = x + y;
    x = y;
    y = result;
    number --;
  }
  return result;
}
// console.log(rectCover(5));
// function Power(base, exponent)
// {
//     // write code here
//     return Math.pow(base, exponent)
// }
// console.log(Power(0,3));

function reOrderArray(array)
{
    // write code here
    var oddNumber = [];
    var evenNumber = [];
    for(let item of array){
      if(item % 2 === 0) evenNumber.push(item)
      else oddNumber.push(item)
    }
    return oddNumber.concat(evenNumber);
}
let array = [1, 2, 3, 4, 5];
console.log(reOrderArray(array));