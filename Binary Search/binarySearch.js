function binarySearch(nums, left, right, target) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (nums[mid] === target) return mid;
  else if (nums[mid] < target) {
    return binarySearch(nums, mid + 1, right, target);
  }
  return binarySearch(nums, left, mid - 1, target);
}

const x = [1, 3, 4, 5, 6, 8, 12, 67, 99];

console.log(binarySearch(x, 0, x.length - 1, 12));
