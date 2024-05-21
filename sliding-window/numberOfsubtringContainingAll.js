function numberOfSubstrings(s) {
  let count = 0;

  let obj = {
    a: 0,
    b: 0,
    c: 0,
  };

  for (let i = 0; i < s.length; i++) {
    obj = {
      a: 0,
      b: 0,
      c: 0,
    };
    obj[s[i]] = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (obj[s[j]] === 0) obj[s[j]] = 1;
      if (obj.a == 1 && obj.b == 1 && obj.c == 1) {
        count += s.length - j;
        break;
      }
    }
  }

  return count;
}

//numberOfSubstrings("aaabc");

// i dont know which version
function numberOfSubstrings2(s) {
  let a = 0,
    b = 0,
    c = 0,
    count = 0,
    left = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") a++;
    if (s[i] === "b") b++;
    if (s[i] === "c") c++;
    console.log(i, a, b, c);

    while (a > 0 && b > 0 && c > 0 && left <= i) {
      count = count + s.length - i;
      if (s[left] === "a") a--;
      if (s[left] === "b") b--;
      if (s[left] === "c") c--;
      left++;
    }
  }

  console.log(count);
  return count;
}

//numberOfSubstrings2("aaabc");

//type 2
function numberOfSubstrings3(s) {
  let count = 0;
  let right = 0;
  let left = 0;
  let obj = { a: 0, b: 0, c: 0 };

  while (right < s.length) {
    obj[s[right]] += 1;

    while (obj.a > 0 && obj.b > 0 && obj.c > 0) {
      count += s.length - right;
      obj[s[left]] -= 1;
      left++;
    }
    right++;
  }
  console.log(count);
}

numberOfSubstrings3("aaabc");
