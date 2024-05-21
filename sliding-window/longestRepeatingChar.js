var characterReplacement = function (s, k) {
  let max = 0;
  const alphabets = [];

  for (let i = 65; i <= 90; i++) {
    alphabets.push(String.fromCharCode(i));
  }

  for (let i = 0; i < alphabets.length; i++) {
    const char = alphabets[i];
    let start = 0;
    let end = 0;
    let charCount = 0;
    while (end < s.length) {
      if (s[end] !== char) {
        charCount++;
      }
      end++;
      if (charCount > k) {
        if (s[start] !== char) {
          charCount--;
        }
        start++;
      }
    }
    if (max < end - start) max = end - start;
  }

  return max;
};
