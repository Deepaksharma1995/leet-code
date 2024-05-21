var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    let lastIndex = nums2.indexOf(nums1[i]);
    let value = -1;
    for (let j = lastIndex + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        value = nums2[j];
        break;
      }
    }
    result.push(value);
  }
  return result;
};

function nextGreaterElementStack(nums1, nums2) {
  let stack = [];
  let result = new Array(nums2.length).fill(-1);
  let returnResult = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      stack.push(nums2[i]);
      continue;
    } else if (stack[stack.length - 1] > nums2[i]) {
      result[i] = stack[stack.length - 1];
      stack.push(nums2[i]);
    } else {
      while (stack[stack.length - 1] <= nums2[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        stack.push(nums2[i]);
        continue;
      } else {
        result[i] = stack[stack.length - 1];
        stack.push(nums2[i]);
      }
    }
  }

  console.log(result, "this is");

  for (let i = 0; i < nums1.length; i++) {
    console.log(nums2.indexOf(nums1[i]));
    returnResult[i] = result[nums2.indexOf(nums1[i])];
  }

  console.log(returnResult);

  return returnResult;
}

nextGreaterElementStack([4, 1, 2], [1, 3, 4, 2]);
