/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ListNode(x){
  this.val = x;
  this.next = null;
}
function FindKthToTail(head, k)
{
    // write code here
    // 压入数组中，然后取出array.length - k
    let result = [];
    while(head){
      result.push(head);
      head = head.next
    }
    return result[result.length - k];
}
// module.exports = {
//     FindKthToTail : FindKthToTail
// };
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
console.log(FindKthToTail(head, 1));