function myAtoi(s) {
  let number = 0;
  let sign = "+";
  for (let i = 0; i < s.length; i++) {
    console.log(number);
    if (s[i] === " ") continue;
    else if (s[i] === "+" || s[i] === "-") {
      sign = s[i];
      continue;
    } else if (s.charCodeAt(i) - 48 > 9) {
      break;
    } else {
      number = number * 10 + (s.charCodeAt(i) - 48);
    }
  }

  if (sign === "-") number = -number;

  if (number > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  if (number < -Math.pow(2, 31)) return -Math.pow(2, 31);
  else return number;
}

console.log(myAtoi("   42 with char"));
