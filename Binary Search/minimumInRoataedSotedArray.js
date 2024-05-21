function serachRoatedArray(nums) {
  let n = nums.length - 1;
  let low = 0,
    high = n;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    console.log(mid);
    if (nums[mid - 1] > nums[mid]) return nums[mid];
    //if (nums[mid - 1] === undefined) return nums[0];

    if (nums[mid] > nums[high]) low = mid + 1;
    else high = mid - 1;
  }

  return nums[0];
}

console.log(serachRoatedArray([1, 2, 3, 4, 5]));
