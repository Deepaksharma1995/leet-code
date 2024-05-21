//brute force approach
var longestOnes = function (nums, k) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let curr = 0;
    let zero = 0;
    for (let j = i; j < nums.length; j++) {
      if (A[j] === 0 && ++zero > k) break;
      curr++;
    }
    curr > max && (max = curr);
  }
};

//optimised apprach
function longOnes(nums, k) {
  let start = 0;
  let end = 0;
  let zeroes = 0;

  while (end < nums.length) {
    if (nums[end] === 0) {
      zeroes++;
    }
    end++;
    if (zeroes > k) {
      if (nums[start] === 0) {
        zeroes--;
      }
      start++;
    }
  }
  return end - start;
}
