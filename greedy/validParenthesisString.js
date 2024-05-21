var checkValidString = function (s) {
  let leftMin = 0,
    leftMax = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      leftMin++;
      leftMax++;
    } else if (s[i] === ")") {
      leftMin--;
      leftMax--;
    } else if (s[i] === "*") {
      leftMin--; //assume * is )
      leftMax++; //assume * is (
    }
    if (leftMax < 0) return false;
    leftMin = Math.max(leftMin, 0);
  }
  return leftMin === 0;
};

console.log(checkValidString("(*)"));
