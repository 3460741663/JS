// function ListNode(x){
//     this.val = x;
//     this.next = null;
// }
// function getValue(pHead1, pHead2){
//   let val;
//   if(pHead1 && pHead2){
//     val = (pHead1.val > pHead2.val) ? pHead1.val : pHead2.val;
//   }else if (!pHead1 && !pHead2){
//     return null
//   }else if (pHead1){
//     val = pHead1.val
//   }else if (pHead2){
//     val = pHead2.val
//   }
//   return val
// }
// function Merge(pHead1, pHead2)
// {
//     // write code here
//     let val = getValue(pHead1, pHead2);
//     let result = new ListNode(val);
//     let temp = result;
//     let count =0;
//     while(pHead1 || pHead2 || count < 10){
//       // console.log(pHead1, pHead2);
//       // pHead1 = pHead1.next;
//       // pHead2 = pHead2.next;
//       // pHead1没了直接就接pHead2
//       if(pHead1 && pHead2 && pHead1.val < pHead2.val){
//         temp.next = new ListNode(pHead1.val)
//         console.log(pHead1.val)
//         pHead1 = pHead1.next;
//         count++
//       } else if (pHead1 && pHead2 && pHead1.val > pHead2.val)
//       {
//         temp.next = new ListNode(pHead2.val)
//         pHead2 = pHead2.next;
//         count++
//       } else if (pHead1 && !pHead2){
//         temp.next = new ListNode(pHead1.val)
//         pHead1 = pHead1.next;
//         count++
//       } else if (pHead2 && !pHead1){
//         temp.next = new ListNode(pHead2.val)
//         pHead2 = pHead2.next;
//         count++
//       }
//     }
// }
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// let top = new ListNode(1);
// top.next = new ListNode(2);
// top.next.next = new ListNode(3);
// top.next.next.next = new ListNode(4);
// let merge = Merge(head, top);
// console.log(merge);
// // module.exports = {
// //     Merge : Merge
// // };


// 简练写法
// 考察健壮性
function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
  // write code here
  let result, temp;
  result = new ListNode(0); // 返回result.next
  temp = result;
  while(pHead1 || pHead2){
    if(pHead1 === null || pHead2 === null){
      temp.next = pHead1 ? pHead1 : pHead2
      break
    }
    if(pHead1.val <= pHead2.val){
      temp.next = pHead1;
      pHead1 = pHead1.next;
      temp = temp.next;
    }else{
      temp.next = pHead2;
      pHead2 = pHead2.next;
      temp = temp.next;
    }
  }
  return result.next;
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
let top = new ListNode(2);
top.next = new ListNode(5);
top.next.next = new ListNode(5);
top.next.next.next = new ListNode(7);
// console.log(Merge(head, top));
Merge(head,top)
// module.exports = {
//     Merge : Merge
// };