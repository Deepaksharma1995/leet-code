function sortList(head) {
  if (!head || !head.next) return head;

  let prev = head,
    left = head,
    right = head;

  while (head && head.next) {
    head = head.next.next;
    prev = right;
    right = right.next;
  }
  prev.next = null;
  left = sortList(left);
  right = sortList(right);

  return merge(left, right);
}

function merge(a, b) {
  if (!a) return b;
  if (!b) return a;
  let c;
  if (a.val < b.val) {
    c = a;
    c.next = merge(a.next, b);
  } else {
    c = b;
    c.next = merge(a, b.next);
  }

  return c;
}

//2 -> 4  //1 -> 3
//2 -> 4  3
// 4 3
//3 -> 4
//2 -> 3 -> 4
//1 -> 2 -> 3 -> 4
