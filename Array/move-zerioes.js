let moveZeroes = (a) => {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== 0) {
      a[i] = a[count];
      count++;
    }
  }
  while (count < a.length) {
    a[count] = 0;
    count++;
  }
};
