function mergeTwoSortedArray(arr1, arr2) {
  let i = arr1.length - 1;
  let j = 0;

  while (arr1[i] > arr2[j]) {
    let temp = arr1[i];
    arr1[i] = arr2[j];
    arr2[j] = temp;
    i--;
    j++;
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  console.log(arr1, arr2);
}

mergeTwoSortedArray([1, 4, 5, 6], [2, 3, 9]);
