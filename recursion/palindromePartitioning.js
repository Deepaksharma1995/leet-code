function partition(s) {
  const res = [];
  const path = [];
  function recur(index) {
    if (index === s.length) {
      console.log(path);
      res.push([...path]);
      return;
    }
    for (let i = index; i <= s.length; i++) {
      if (isPalindrome(s, index, i)) {
        path.push(s.slice(index, i + 1));
        recur(i + 1);
        path.pop();
      }
    }
  }

  function isPalindrome(str, start, end) {
    while (start <= end) {
      if (str[start] != str[end]) return false;
      start++;
      end--;
    }
    return true;
  }

  recur(0);
  console.log(res);
  return res;
}

partition("aab");
