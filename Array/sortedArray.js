var check = function (nums) {
  let rotateIdx = null;
  let i = 0;

  while (i < nums.length - 1) {
    if (nums[i] > nums[i + 1]) {
      rotateIdx = i;
      break;
    }
    i++;
  }

  console.log(rotateIdx);

  if (rotateIdx == null) return true; //if no rotation required

  function rotate(i, j) {
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }

  rotateIdx = nums.length - 1 - rotateIdx;

  rotate(0, nums.length - 1);
  rotate(0, rotateIdx - 1);
  rotate(rotateIdx, nums.length - 1);

  console.log(nums);

  for (i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] < nums[i]) return false;
  }

  return true;
};

console.log(check([5, 5, 6, 6, 6, 9, 1, 2]));
