const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
let fast=head;
let slow=head;
let prev=null;
while (fast!=null&&fast.next!=null){
  prev=slow;
  slow=slow.next;
  fast=fast.next.next;
  
}
return prev.next.data;
};
