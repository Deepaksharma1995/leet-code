function seacrhMatrix(matrix, target) {
  let low = 0,
    high = matrix.length - 1;
  let l2 = matrix[0].length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (matrix[mid][0] <= target && matrix[mid][l2 - 1] >= target) {
      return searchArray(matrix[mid], target);
    }
    if (matrix[mid][l2 - 1] < target) {
      low = mid + 1;
    } else if (matrix[mid][0] > target) {
      high = mid - 1;
    }
  }

  return false;
}

function searchArray(nums, target) {
  let low = 0,
    high = nums.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return true;
    else if (nums[mid] > target) high = mid - 1;
    else low = mid + 1;
  }

  return false;
}

console.log(seacrhMatrix([[1]], 1));
