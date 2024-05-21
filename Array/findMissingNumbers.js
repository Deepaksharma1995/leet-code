function findMissingNumbers(nums) {
  nums.sort((a, b) => a - b);
  let missingNumber = null;
  let doubleNumber = null;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i + 1 && nums[i + 1] !== i + 1) continue;
    else if (nums[i] === nums[i + 1]) doubleNumber = nums[i];
    else missingNumber = i + 1;
  }

  console.log(missingNumber, doubleNumber);
}

findMissingNumbers([3, 1, 2, 5, 4, 6, 7, 5]);

//1,2,3,4,5,6,7,8 = 36 => x - y
//1,2,3,4,3,6,7,8 = 34 => (x2 - y2)/(x - y)  = (x + y)

function findMissingNumbers2(nums) {
  const n = nums.length;

  const SN = (n * (n + 1)) / 2;
  const S2N = (n * (n + 1) * (2 * n + 1)) / 6;

  let S = 0,
    S2 = 0;

  for (let i = 0; i < n; i++) {
    S += nums[i];
    S2 += nums[i] * nums[i];
  }

  const val1 = S - SN; // x - y
  let val2 = S2 - S2N; // x2 - y2

  val2 = val2 / val1;

  const x = (val1 + val2) / 2;
  const y = x - val1;

  return [x, y];
}
