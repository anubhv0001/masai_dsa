const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var fillGaps = function (head) {
    
    let current =head;
    while(current&&current.next){
      let diff=current.next.data-current.data;
      if(diff>1){
        let temp=current;
        for(let i=1;i<diff;i++){
          let newNode=new LinkedListNode(current.data+i);
          newNode.next=temp.next;
          temp.next=newNode;
          temp=newNode;
        }
        current=temp.next;
      }
      else{
        current=current.next;
      }
    }
    return head;
};