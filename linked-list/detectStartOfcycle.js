function detectCycleStart(head) {
  if (!head || head.next === head) return head;
  let aux = [];

  let temp = head;

  while (temp != null) {
    if (aux.includes(temp.val)) return aux.indexOf(temp.val);
    aux.push(temp.val);
    temp = temp.next;
  }

  return null;
}
