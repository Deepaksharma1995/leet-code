function jump(nums) {
  let res = 0; //to store the number of jumps
  let left = 0, //left  window
    right = 0; //right window

  while (right < nums.length - 1) {
    let farthest = 0; //max jump we can achieve in a window of [left,right]
    for (let i = 0; i < right + 1; i++) {
      //iterate through all the values and get the farthest
      farthest = Math.max(farthest, i + nums[i]);
    }
    left = right + 1; //point to the next element of next window
    right = farthest; // point the farthest value we reached from previous window
    res++; //increment jump
  }

  return res;
}
