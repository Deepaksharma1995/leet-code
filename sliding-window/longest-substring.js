var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  const obj = {};
  obj[s[0]] = 0;
  let maxLength = 1;
  let i = 0,
    j = 1;

  while (j < s.length) {
    console.log(obj);
    if (obj.hasOwnProperty(s[j]) && i <= obj[s[j]]) {
      i = obj[s[j]] + 1;
    }
    obj[s[j]] = j;
    if (maxLength < j - i + 1) maxLength = j - i + 1;
    j++;
  }
  console.log(maxLength);
  return maxLength;
};

lengthOfLongestSubstring("abba");
