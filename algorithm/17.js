
// 先序遍历
// function preTrace(head){
//   let result = [];
//   let stack = [];
//   stack.push(head);
//   while(stack.length){
//     // console.log(stack.length);
//     let temp = stack.pop();
//     if(temp){
//       result.push(temp.val);
//       temp.right && stack.push(temp.right)
//       temp.left && stack.push(temp.left)
//     }
//   }
//   return result;
// }
// 中序遍历
// function midTrace(head){
//   let result = [];
//   let stack = [];
//   let root = head;
//   while(stack.length || root !== undefined){
//     while(root !== undefined && root){
//       stack.push(root);
//       root = root.left
//     }
//     if(stack.length !== 0){
//       root = stack.pop();
//       result.push(root.val);
//       root = root.right
//     }
//   }
//   return result;
// }
function HasSubtree(pRoot1, pRoot2)
{
  // write code here
  let parentPre = JSON.stringify(preTrace(pRoot1));
  let parentMid = JSON.stringify(midTrace(pRoot1));
  let childPre = JSON.stringify(preTrace(pRoot2)).slice(1).slice(0, -1);
  let childMid = JSON.stringify(midTrace(pRoot2)).slice(1).slice(0, -1);
  return ~(parentPre.indexOf(childPre)) !== 0 && ~(parentMid.indexOf(childMid)) !== 0
}
var tree1 ={
  val: 2,
  left: {
    val: 4,
    left: {
      val: 0
    }
  },
  right: {
    val: 5
  }
}

var tree2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 0
      }
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    left: {
      val: 5,
      left: {
        val: 7
      },
      right: {
        val: 8
      }
    },
    right: {
      val: 6
    }
  }
}
// console.log(midTrace(tree));
// console.log(midTrace(tree));
console.log(HasSubtree(tree2, tree1));

// var str = "abcd";
// console.log(str.indexOf("bcd") != -1);