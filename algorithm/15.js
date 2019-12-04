function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
    // write code here
    let result = [];
    while(pHead){
      result.push(pHead);
      pHead = pHead.next
    }
    let count = result.length;
    let head = result.pop();
    let temp = head;
    while(count){
      temp.next = result.pop();
      temp = temp.next;
      count --;
    }
    return head;
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
let result = ReverseList(head);
console.log(result.val);
// module.exports = {
//     ReverseList : ReverseList
// };