function rotateString(s, t) {
  let n = s.length;
  let sArray = s.split("");
  let tArray = t.split("");

  if (sArray.length !== tArray.length) return false;

  for (let i = 0; i < n; i++) {
    let x = sArray.slice().reverse();
    x = reverse(x, 0, i);
    x = reverse(x, i + 1, n - 1);
    if (match(x, tArray)) return true;
  }

  return false;
}

function reverse(temp, i, j) {
  while (i < j) {
    let x = temp[i];
    temp[i] = temp[j];
    temp[j] = x;
    i++;
    j--;
  }

  return temp;
}

function match(temp, t) {
  console.log(temp, t);
  return temp.join("") == t.join("");
}

// better approach

function rortateString2(s, t) {
  if (s.length !== t.length) return false;
  return s.concat(s).includes(t);
}
console.log(rotateString("abcde", "cdeab"));
