function wordBreak(s, wordDict) {
  function canSegment(start) {
    if (start === s.length) {
      return true; // The entire string has been successfully segmented
    }

    for (let end = start + 1; end <= s.length; end++) {
      const currentWord = s.substring(start, end);
      console.log(currentWord, start, end);

      if (wordDict.includes(currentWord) && canSegment(end)) {
        return true;
      }
    }

    return false;
  }

  return canSegment(0);
}

// Example usage:
const s = "catsandog";
const wordDict = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s, wordDict)); // Output: true
