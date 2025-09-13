
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
   if(!head)return null;
   if(position===0){
     return head.next;
   }
   let current=head;
   let prev=null;
   let index=0;
   
   while(current!=null&&index<position){
     prev=current;
     current=current.next;
     index++;
   }
   if (current==null)return head;
   prev.next=current.next;
   return head;
}
