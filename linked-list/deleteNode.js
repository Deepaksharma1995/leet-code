var deleteNode = function (node) {
  let temp = head;

  //base condition
  if (temp.val === node.val) {
    temp = temp.next;
    return;
  }

  while (temp.next.val !== node.val) {
    temp = temp.next;
  }

  let exNode = temp.next.next || null;
  temp.next = exNode;
};
