function addTwoNumbers(l1, l2) {
  let extra = 0;
  let node = new ListNode(0);

  while (l1 && l2) {
    let total = l1?.val || 0 + l2?.val || 0 + extra;
    if (total < 10) extra = 0;
    else extra = total % 10;
    node.next = new ListNode(total);
    l1 = l1.next;
    l2 = l2.next;
    total = 0;
  }

  console.log(node);

  return node.next;
}

function ListNode(data) {
  this.val = data;
  this.next = null;
}
