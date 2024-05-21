function findPages(nums, m) {
  let low = Math.max(...nums);
  let high = nums.reduce((a, b) => a + b, 0);

  if (nums.length < m) return -1;

  for (let i = low; i <= high; i++) {
    if (countStudents(nums, i) === m) {
      return i;
    }
  }

  return low;
}

function countStudents(nums, pages) {
  let students = 1;
  let pagesStudent = 0;
  for (let i = 0; i < nums.length; i++) {
    if (pagesStudent + nums[i] <= pages) {
      pagesStudent += arr[i];
    } else {
      students++;
      pagesStudent = arr[i];
    }
  }

  return students;
}
