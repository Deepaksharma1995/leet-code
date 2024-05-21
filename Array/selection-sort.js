function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[smallestIndex] > nums[j]) {
        smallestIndex = j;
      }
    }
    let temp = nums[i];
    nums[i] = nums[smallestIndex];
    nums[smallestIndex] = temp;
  }

}

selectionSort([2, 5, 9, 7, 8]);
