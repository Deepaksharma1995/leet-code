function majorityElement(nums) {
  let el1 = Number.NEGATIVE_INFINITY;
  let el2 = Number.NEGATIVE_INFINITY;
  let count1 = 0,
    count2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count1 === 0 && el2 !== nums[i]) {
      count1 = 1;
      el1 = nums[i];
    } else if (count2 === 0 && el1 !== nums[i]) {
      count2 = 1;
      el2 = nums[i];
    } else if (nums[i] === el1) count1++;
    else if (nums[i] === el2) count2++;
    else {
      count1--;
      count2--;
    }
  }

  console.log(el1, el2);

  //to guarantee yourself if the chosen element is majority or not

  let ls = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === el1) count1++;
    if (nums[i] === el2) count2++;
  }

  let mini = Math.floor(nums.length / 3) + 1;

  if (count1 >= mini) ls.push(el1);
  if (count2 >= mini) ls.push(el2);
console.log(ls,mini)
  return ls;
}

majorityElement([1,2]);
//Boyer Moore's  extension algo
