function findFloorandCiel(nums, x) {
  let f = findFloor(nums, nums.length, x);
  let c = findCiel(nums, n, x);

  return [f, c];
}

function findFloor(nums, n, x) {
  let low = 0,
    high = n - 1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= x) {
      ans = arr[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

function findCiel(nums, n, x) {
  let low = 0,
    high = n - 1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= x) {
      ans = arr[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
