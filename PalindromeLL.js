const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
  if (!head||!head.next)return true;
    let slow=head;
    let fast=head;
    while (fast&&fast.next){
      slow=slow.next;
      fast=fast.next.next;
      
    } //reversing half LL inorder to compare
    let prev=null;
    while(slow){
      let nextTemp=slow.next;//preserving nxt pointer
      slow.next=prev;
      prev=slow;
      slow=nextTemp;
    }
    let left=head;
    let right=prev;
    while (right){
        if (left.data!==right.data)return false;
        left=left.next;
        right=right.next;
    }
    return true;
};