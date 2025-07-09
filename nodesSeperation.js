const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
function isPrime(n){
  if(n<=1)return false;
  if(n===2)return true;
  if (n%2===0)return false;
  for (let i=3;i*i<=n;i+=2){
    if(n%i==0)return false;
  }
  return true;
}
var funMaths = function (head) {
     let primedummy=new LinkedListNode(-1);
     let nonprimedummy=new LinkedListNode(-1);
     let primetail=primedummy;
     let nonprimetail=nonprimedummy;
     let current=head;
     
     while (current){
       if (isPrime(current.data)){
         primetail.next=current;
         primetail=primetail.next;
       }
       else{
          nonprimetail.next=current;
            nonprimetail=nonprimetail.next;
       }
       current=current.next;
     }
       primetail.next=nonprimedummy.next;
    nonprimetail.next=null;
      return primedummy.next;
};