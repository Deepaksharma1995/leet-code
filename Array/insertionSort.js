function insertionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
}
