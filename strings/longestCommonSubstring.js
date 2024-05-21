function expandAroundCenter(s, left, right) {
  //console.log(s, left, right);
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.substring(left + 1, right);
}

function longestPalindrome(s) {
  if (s.length === 0) return "";

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    //check fopr odd length
    let str = expandAroundCenter(s, i, i);
    if (str.length > longest.length) longest = str;

    //check for even length
    let str1 = expandAroundCenter(s, i, i + 1);
    if (str1.length > longest.length) longest = str1;
  }

  return longest;
}

const inputString = "babad";
const result = longestPalindrome(inputString);
console.log(result);
