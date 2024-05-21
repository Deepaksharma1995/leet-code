function search(nums, x) {
  let low = 0;
  high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === x) return mid;
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= x && x <= nums[mid]) high = mid - 1;
      else low = mid + 1;
    } else {
      if (arr[mid] <= x && x <= arr[high]) low = mid + 1;
      else high = mid - 1;
    }
  }
  return -1;
}
