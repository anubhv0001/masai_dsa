const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
let first=head;
let second=head;
for (let i=0;i<n;i++){
  if(!first)return null;
  first=first.next;
  
}
while (first){
  first=first.next;
  second=second.next;
}
return second.data;
}