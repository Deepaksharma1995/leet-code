function beautySum(s) {
  let totalBeauty = 0;

  for (let i = 0; i < s.length; i++) {
    let allSubStrings = {};
    for (let j = i; j < s.length; j++) {
      allSubStrings[s[j]] = (allSubStrings[s[j]] || 0) + 1;
      let beauty = calculateBeauty(allSubStrings);
      totalBeauty += beauty;
    }
  }

  return totalBeauty;
}

function calculateBeauty(obj) {
  let max = -Infinity,
    min = +Infinity;

  for (const char in obj) {
    if (obj[char] > max) max = obj[char];
    if (obj[char] < min) min = obj[char];
  }

  return max - min;
}

let str = "aabcb";

const result = beautySum(str);
console.log(result);
