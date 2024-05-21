function LeadersInArray(nums) {
  let leaders = [nums[nums.length - 1]];
  let currentLead = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > currentLead) {
      leaders.push(nums[i]);
      currentLead = nums[i];
    }
  }
}
