
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    let prev=null;
    let current =head;
    
    while (current!=null){
      let forward=current.next;//link preserve krne ke liye save krege 
      current.next=prev;//reverse krrhe
      prev=current;//moving forward in order to reverse remaining
      current =forward//current aage move krega jisse usko prev pe link krske
    }
    return prev
}