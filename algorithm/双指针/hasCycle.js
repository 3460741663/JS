var hasCycle = function(head) {
    let quick = head;
    let slow = head;
    while(quick){
      if(quick.val == slow.val) return false
      quick = quick.next.next;
      slow = slow.next
    }
    return true;
};

console.log(hasCycle())