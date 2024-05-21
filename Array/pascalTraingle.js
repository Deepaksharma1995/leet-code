//first case when row and col is given

function pascalFind(row, col) {
  let res = 1;
  for (let i = 0; i < col - 1; i++) {
    res = res * (row - i);
    res = res / (i + 1);
  }
  console.log(res);
  //return parseInt(res);
}

//print perticular row
function printRow(n) {
  let ans = 1;
  let res = [];
  //   console.log(ans);
  for (let i = 1; i < n; i++) {
    ans = ans * (n - i);
    ans = ans / i;
    res.push(ans);
    // console.log(ans);
  }
  return res;
}

function printWholeTraingle(numRows) {
  let sol = [];
  for (let i = 1; i <= numRows; i++) {
    sol.push(...printRow(i));
  }
  return sol;
}

//console.log(printWholeTraingle(5));
//pascalFind(4, 3);

function nCr(n, r) {
  let res = 1;
  let tempAns = [];
  tempAns.push(1);
  for (let i = 0; i < r; i++) {
    res = res * (n - i);
    res = res / (i + 1);
    tempAns.push(res);
  }
  return tempAns;
}

function pascalTraingle(numRows) {
  const ans = [];
  for (let row = 1; row <= numRows; row++) {
    ans.push(...nCr(row));
  }
  console.log(ans);
  return ans;
}

pascalTraingle(3);
