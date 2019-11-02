function ListNode(x){
  this.val = x;
  this.next = null;
}
function printListFromTailToHead(head)
{
    // write code here
    var result = [];
    while(head !== null) {
        result.push(head.val);
        head = head.next;
    }
    result.reverse();
    return result;
}
var a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4);
a.next.next.next.next = new ListNode(5);
console.log(printListFromTailToHead(a));
