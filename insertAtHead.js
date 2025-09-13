function insertNodeAtHead(head, data) {
    let newNode=new LinkedListNode(data);
    newNode.next=head;
    return newNode;
}
