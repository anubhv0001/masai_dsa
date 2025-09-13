
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var deleteMiddle = function(head, n) {
    if (n==1)return null;
    let mid=Math.floor(n/2);
    let current=head;
    for (let i=0;i<mid-1;i++){
      current=current.next;
    }
    current.next=current.next.next;
    return head;
};