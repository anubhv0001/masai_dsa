
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var deleteMiddle = function(head, n) {
    let slow=head;
    let fast=head;
    let prev=null;
    while(fast!=null&&fast.next!=null){
      prev=slow;
      slow=slow.next;
      fast=fast.next.next;
    }
    prev.next=slow.next;
    return head;
    
};
