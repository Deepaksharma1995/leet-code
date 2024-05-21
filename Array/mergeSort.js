function merge(nums, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (nums[left] <= nums[right]) {
      temp.push(nums[left]);
      left++;
    } else {
      temp.push(nums[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(nums[left]);
    left++;
  }
  while (right <= high) {
    temp.push(nums[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    nums[i] = temp[i];
  }
}

function mergeSort(nums, low, high) {
  if (low >= high) return;
  let mid = (low + high) / 2;

  mergeSort(nums, low, mid);
  mergeSort(nums, mid + 1, high);
  merge(nums, low, mid, high);
}

console.log(mergeSort([8, 9, 56, 3, 3, 2, 45, 7, 3, 6, 1, 12, 243], 0, 12));
