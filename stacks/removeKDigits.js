function removeKDigitsRecursive(num, k) {
  if (k === 0) return;
  let allNumbers = [];
  function recur(index, max, str) {
    if (index === num.length) {
      //console.log(str, "this is num length", num.length - k, str.length);
      if (str.length === num.length - k) {
        allNumbers.push(parseInt(str));
      }
      return;
    }

    //either take it
    recur(index + 1, max + 1, str + num[index]);

    //either don't take it
    recur(index + 1, max + 1, str);
  }

  recur(0, 0, "");

  let min = allNumbers[0];
  allNumbers.forEach((n) => (n < min ? (min = n) : (min = min)));
  return min;
}

//removeKDigitsRecursive("1432219", 3);

function removeKDigits(num, k) {
  let st = [];

  for (let i = 0; i < num.length; i++) {
    console.log(st);
    let n = num[i];

    while (st.length > 0 && k > 0 && st[st.length - 1] > n) {
      console.log("whats happening here?", st, "an k is ", k);
      st.pop();
      k--;
    }

    if (st.length > 0 || n !== "0") {
      st.push(n);
    }
  }

  if (k > 0) {
    st = st.slice(0, -k);
  }
  console.log(st.join(""));
  return st.join("") || "0";
}

removeKDigits("1432219", 3);
//removeKDigits("112", 1);
//removeKDigits("10001", 4);
