function binarySearchSQRT(num) {
  let low = 1;
  let high = num;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);

    if (mid * mid <= num) low = mid + 1;
    else high = mid - 1;
  }

  return high;
}
