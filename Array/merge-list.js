var mergeTwoLists = (list1, list2) => {
  let temp = { val: -1, next: null };
  let result = temp;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }
  temp.next = list1 || list2;

  return result;
};
