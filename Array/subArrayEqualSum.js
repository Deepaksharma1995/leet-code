function sumEqualK(nums, k) {
  let map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    let remove = sum - k;
    if (map.has(remove)) count += map.get(remove);
    if (map.has(sum)) map.set(sum, map.get(sum) + 1);
    else map.set(sum, 1);
    console.log(count, map);
  }
  console.log(count);
  return count;
}

sumEqualK([1, 2, 3, -3], 3);

// 1,1,1
