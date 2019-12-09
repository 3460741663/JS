// 中序遍历得到有序结果数组，重新拼凑
function Convert(pRootOfTree)
{
    if(!pRootOfTree)
        return null;
    var arr=[],len=0;
    midTrace(pRootOfTree,arr);
    len=arr.length;
    arr[0].left=null;
    arr[0].right=arr[1];
    for(var i=1;i<len-1;i++){
        arr[i].left=arr[i-1];
        arr[i].right=arr[i+1];
    }
    arr[len-1].left=arr[len-2];
    arr[len-1].right=null;
    return arr[0];
}
// 中序遍历非递归写法
function midTrace(root, arr){
  let arr = [];
  while (true) {
    while (root !== null) {
      arr.push(root);
      root = root.left;
    }
  // 循环的结束条件是数组长度为0，遍历完成
  if (arr.length === 0) {
    break;
  }
  let temp = arr.pop();
  visit(temp); // 访问左子树的根节点
  root = temp.right; // 左子树的右子节点
  }
}