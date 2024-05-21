function remove(head, n) {
  let length = 0;

  let temp = head;

  while (temp) {
    temp = temp.next;
    length++;
  }

  let index = length - n;
  temp = head;
  length = 0;

  while (temp) {
    if (length + 1 === index) {
      temp.next = temp.next.next;
      return head;
    }
    temp = temp.next;
  }
}
