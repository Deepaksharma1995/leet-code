let threeSum = function (nums) {
  let result = [];
  let hash = {};

  nums.forEach((data, index) => (hash[data] = index));

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let target = -nums[i] - nums[j];
      if (hash[target] && hash[target] !== i && hash[target] !== j) {
        const triplet = [nums[i], nums[j], nums[hash[target]]];
        triplet.sort((a, b) => a - b);
        if (!result.find((arr) => arr.toString() === triplet.toString()))
          result.push(triplet);
      }
    }
  }

  return result;
};
