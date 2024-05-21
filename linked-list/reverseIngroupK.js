function reverseKGroup(head, k) {
  let temp = head;
  let auxArr = [];
  let i = 0;

  while (temp) {
    auxArr.push(temp.val);
    temp = temp.next;
  }
  while (i < auxArr.length) {
    let start = i,
      end = i + k - 1;
    auxArr = reverse(auxArr, start, end);
  }

  console.log(auxArr);
}

function reverse(arr, start, end) {
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return auxArr;
}
