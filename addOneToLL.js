
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
function reverseList(head) {
  let prev=null;
  let curr=head;
   while(curr){
    let next=curr.next;  
    curr.next=prev;      
    prev=curr;          
    curr=next;           
  }
  return prev;
}
var addOneToLinkedList=function(head) {
   if (!head) return new LinkedListNode(1);

   head=reverseList(head);  

   let cur=head, carry=1, prev=null;
   while (cur && carry) {
     let sum=cur.data+carry;
     cur.data=sum%10;
     carry=Math.floor(sum/10);
     prev=cur;
     cur=cur.next;
   }
   if(carry) {
     prev.next = new LinkedListNode(carry);
   }

   return reverseList(head);  
};
