
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    let dummy=new ListNode(-1);
    let current=dummy;
    
    while (l1!==null&&l2!==null){
      if(l1.val<l2.val){
        current.next=l1;
        l1=l1.next;
      }
      else{
        current.next=l2;
        l2=l2.next;
      }
       current = current.next;  
     
    
    }
     current.next=l1!==null? l1 : l2;
      return dummy.next;
};