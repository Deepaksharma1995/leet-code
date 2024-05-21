function countInversions(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) count++;
    }
  }

  console.log(count);
}

countInversions([5, 3, 2, 1, 4]);

function countInversionMergeSort(nums) {
  let cnt = mergeSort(nums, 0, nums.length - 1);
  function mergeSort(nums, low, high) {
    let count = 0;
    if (low >= high) return count;
    const mid = Math.floor((low + high) / 2);
    count += mergeSort(nums, low, mid);
    count += mergeSort(nums, mid + 1, high);
    count += merge(nums, low, mid, high);
    return count;
  }

  function merge(nums, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;
    let count = 0;

    while (left <= mid && right <= high) {
      if (nums[left] <= nums[right]) {
        temp.push(nums[left]);
        left++;
      } else {
        temp.push(nums[right]);
        count += mid - left + 1;
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

    return count;
  }
  console.log(cnt);
}

countInversionMergeSort([5, 3, 2, 1, 4]);
