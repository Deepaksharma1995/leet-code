function precedence(char) {
  if (char === "^") return 3;
  else if (char === "*") return 2;
  else if (char === "+" || char === "-") return 1;
  else return -1;
}

function main(exp) {
  const stack = [];
  let result = "";

  for (let i = 0; i < exp.length; i++) {
    let c = exp[i];
    if (
      (c >= "a" && c <= "z") ||
      (c >= "A" && c <= "Z") ||
      (c >= 0 && c <= 9)
    ) {
      result += c;
    } else if (c === "(") {
      stack.push(c);
    } else if (c === ")") {
      while (stack[stack.length - 1] !== "(") {
        result += `${stack.pop()}`;
      }
      stack.pop();
    } else {
      while (
        stack.length >= 0 &&
        precedence(c) <= precedence(stack[stack.length - 1])
      ) {
        result += `${stack.pop()}`;
      }
      stack.push(c);
    }
  }

  while (stack.length >= 0) {
    result += `${stack.pop()}`;
  }

  console.log(result);
}

main("(p+q)*(m-n)");
