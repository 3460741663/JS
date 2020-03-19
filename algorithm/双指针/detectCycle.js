var detectCycle = function (head) {
  let quick = head;
  let slow = head;
  let common = null;
  while(quick != null && quick.next != null){
    quick = quick.next.next
    slow = slow.next
    if(quick == slow){
      common = quick;break
    }
  }
  slow = head;
  while(common != slow){
    common = common.next;
    slow = slow.next;
  }
  return common
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}
let linkList = new ListNode(3);
linkList.next = new ListNode(2);
linkList.next.next = new ListNode(0);
linkList.next.next.next = new ListNode(-4);
linkList.next.next.next.next = linkList.next
console.log(detectCycle(linkList))