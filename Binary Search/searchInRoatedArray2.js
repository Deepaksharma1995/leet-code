function searchArray(nums, target) {
  let n = nums.length - 1,
    i = 0,
    j = n;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (nums[mid] === target) return true;

    if (nums[i] === nums[mid] && nums[mid] === nums[j]) {
      i++;
      j--;
      continue;
    }
    if (nums[i] <= nums[mid]) {
      if (nums[i] <= target && target <= nums[mid]) j = mid - 1;
      else i = mid + 1;
    } else {
      if (nums[mid] <= target && target <= nums[j]) i = mid + 1;
      else j = mid - 1;
    }
  }
  return false;
}

console.log(searchArray([1, 0, 1, 1, 1]), 0);
