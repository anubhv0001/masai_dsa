
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below
var addTwoNumbers = function(L1, L2) {
    let dummy=new ListNode(0);
    let current=dummy;
    let carry=0;

    while (L1!==null||L2!==null||carry>0){
        let sum=carry;
     if (L1!==null) {
            sum+=L1.val;
            L1=L1.next;
        }
        if (L2!==null) {
            sum+=L2.val;
            L2=L2.next;
        }

        carry=Math.floor(sum / 10);
        current.next=new ListNode(sum % 10);
        current=current.next;
    }
 return dummy.next;
};