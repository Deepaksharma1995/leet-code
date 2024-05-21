var rotate = function (nums, k) {
  k %= nums.length;

  function reverse(i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }

  reverse(0, nums.length - 1);
  console.log(nums);
  reverse(0, k - 1);
  console.log(nums);
  reverse(k, nums.length - 1);
  console.log(nums);
};

rotate(["a", "b", "c", "d", "e"], 3);
