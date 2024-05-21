function asteroidCollision(asteroids) {
  const stack = [];
  const result = [];

  for (let i = 0; i < asteroids.length; i++) {
    let val = asteroids[i];
    if (stack.length == 0) {
      stack.push(val);
      continue;
    }
    if (stack[stack.length - 1] > 0 && val < 0) {
      while (
        stack.length !== 0 &&
        stack[stack.length - 1] < Math.abs(val) &&
        Math.sign(stack[stack.length - 1]) !== Math.sign(val)
      ) {
        stack.pop();
      }

      //check if zero add
      if (stack[stack.length - 1] + val === 0) {
        stack.pop();
      } else if (stack[stack.length - 1] < 0 || stack.length == 0)
        stack.push(val);
    } else {
      stack.push(val);
    }
  }
  console.log(stack);
  return stack;
}

asteroidCollision([1, -2, -2, -2]);
