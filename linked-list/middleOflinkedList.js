var middleNode = function (head) {
  if (head.next === null) return head.val;

  let temp = head;
  let n = 1;

  while (temp !== null) {
    if (temp.next.next !== null) {
      n += 2;
      temp = temp.next.next;
    } else {
      n++;
      temp = temp.next;
    }
  }

  if (n % 2 === 0) n = n / 2;
  else Math.floor(n / 2);

  let t = 1;
  temp = head;

  while (t <= n) {
    t++;
    temp = temp.next;
  }
};
