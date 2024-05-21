function rearrangeArray(nums) {
  let neg = 0;
  let pos = 0;
  let currIndex = 0;

  while (currIndex < nums.length) {
    if (currIndex % 2 == 0) {
      for (let i = pos; i < nums.length; i++) {
        if (nums[i] > 0) {
          pos = i;
          break;
        }
      }
      console.log(nums[pos], pos);
      [nums[currIndex], nums[pos]] = [nums[pos], nums[currIndex]];
      pos++;
    } else {
      for (let i = neg; i < nums.length; i++) {
        if (nums[i] < 0) {
          neg = i;
          break;
        }
      }
      console.log(nums[neg], neg);
      [nums[currIndex], nums[neg]] = [nums[neg], nums[currIndex]];
      neg++;
    }
    console.log(currIndex, nums);
    currIndex++;
  }
  console.log(nums);
}

// rearrangeArray([
//   28, -41, 22, -8, -37, 46, 35, -9, 18, -6, 19, -26, -37, -10, -9, 15, 14, 31,
// ]);
function nextPermutation(A) {
  let n = A.length; // size of the array.

  // Step 1: Find the break point:
  let ind = -1; // break point
  for (let i = n - 2; i >= 0; i--) {
    if (A[i] < A[i + 1]) {
      // index i is the break point
      ind = i;
      break;
    }
  }

  // If break point does not exist:
  if (ind == -1) {
    // reverse the whole array:
    A.reverse();
    return A;
  }

  // Step 2: Find the next greater element
  //         and swap it with A[ind]:

  for (let i = n - 1; i > ind; i--) {
    if (A[i] > A[ind]) {
      [A[i], A[ind]] = [A[ind], A[i]]; // swap A[i] and A[ind]
      break;
    }
  }
  console.log(A);
  // Step 3: reverse the right half:
  A.splice(ind + 1, n - ind - 1, ...A.slice(ind + 1).reverse());
  console.log(A);
  return A;
}

nextPermutation([2,1,5,4,3,0,0]);
