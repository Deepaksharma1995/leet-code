function findNumber(nums, k) {
  let missingNumbers = [];

  let max = Math.max(...nums);
  let i = 1;
  for (let x = 0; x < nums.length; x++) {
    insertSet(i, nums[x]);
    i = nums[x] + 1;
  }

  function insertSet(start, end) {
    while (start < end) {
      missingNumbers.push(start);
      start++;
    }
  }

  let lengthOfMissingArray = missingNumbers.length;

  while (lengthOfMissingArray <= k) {
    missingNumbers.push(i);
    i++;
    lengthOfMissingArray++;
  }
  return missingNumbers[k - 1];
}

//findNumber([4, 7, 9, 10], 7);

function missingK(vec, n, k) {
  for (let i = 0; i < n; i++) {
    if (vec[i] <= k) k++; // shifting k.
    else break;
  }
  return k;
}

console.log(missingK([4, 7, 9, 10], 4, 8));
