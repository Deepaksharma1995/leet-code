function palindrome(head) {
  let temp = head;
  let aux = [];

  while (temp != null) {
    aux.push(temp.val);
    temp = temp.next;
  }
  let i = 0,
    j = aux.length - 1;

  while (i <= j) {
    if (aux[i] !== aux[j]) return false;
    i++;
    j--;
  }

  return true;
}
