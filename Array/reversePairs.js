var reversePairs = function (nums) {
  let count = 0;

  function merge(nums, low, mid, high) {
    let temp = [],
      left = low,
      right = mid + 1;

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
      temp.push(temp[left]);
      left++;
    }

    while (right <= high) {
      temp.push(temp[right]);
      right++;
    }

    for (let i = low; i <= high; i++) {
      nums[i] = temp[i];
    }
  }

  function countPairs(nums, low, mid, high) {
    let cnt1 = 0;
    let right = mid + 1;
    for (let i = low; i <= mid; i++) {
      while (right <= high && nums[i] > 2 * nums[right]) right++;
      cnt1 += right - (mid + 1);
    }

    return cnt1;
  }

  function mergeSort(nums, low, high) {
    let cnt = 0;
    if (low >= high) return cnt;
    let mid = Math.floor((low + high) / 2);
    cnt += mergeSort(nums, low, mid);
    cnt += mergeSort(nums, mid + 1, high);
    cnt += countPairs(nums, low, mid, high);
    merge(nums, low, mid, high);

    return cnt;
  }

  count = mergeSort(nums, 0, nums.length - 1);
  console.log(count);
  return count;
};

reversePairs([1, 3, 2, 3, 1]);
