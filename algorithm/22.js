// 先序遍历
function PrintFromTopToBottom(root) {
  let result = [];
  let stack = [];
  stack.push(root);
  while (stack.length) {
    // console.log(stack.length);
    // let temp = stack.pop();
    let temp = stack.shift();
    // let temp = result.shift();
    if (temp) {
      result.push(temp.val);
      temp.left && stack.push(temp.left)
      temp.right && stack.push(temp.right)
    }
  }
  return result;
}


var tree = {
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

console.log(PrintFromTopToBottom(tree));