const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
if(!head||!head.next)return true;
let slow=head;
let fast=head;

while (fast&&fast.next){// mid point pare
  slow=slow.next;
  fast=fast.next.next;
  }
  let prev=null;
  while (slow){
    let nextTemp=slow.next;
    slow.next=prev;  //midpoint se half LL ko reverse krrhe 
    prev=slow;
    slow=nextTemp;
  }
  let firstHalf=head;
  let secondHalf=prev;
  
  while (secondHalf){
    if(firstHalf.data!=secondHalf.data){
      return false;
    }
    firstHalf=firstHalf.next;
        secondHalf=secondHalf.next;
  }
  return true;
};