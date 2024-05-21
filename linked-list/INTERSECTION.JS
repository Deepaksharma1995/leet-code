function intersection(head1, head2) {
  let map = [];
  let temp = head2;

  while (temp) {
    if (!map.includes(temp)) map.push(temp);
    temp = temp.next;
  }

  temp = head1;
  while (temp) {
    if (map.includes(temp)) return temp;
    temp = temp.next;
  }

  return null;
}

//optimised approach

function intersection2(head1, head2) {
  let d1 = head1;
  let d2 = head2;

  while (d1 != d2) {
    d1 = d1 === null ? head2 : d1.next;
    d2 = d2 === null ? head1 : d2.next;
  }

  return d1;
}
