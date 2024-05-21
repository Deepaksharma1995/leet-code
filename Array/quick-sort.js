function partition(arr, high, low) {
  //choose a pivot
  let pivot = arr[high];

  //index of the pivot
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

function quicksort(arr, high, low) {
  if (low < high) {
    const partitionIndex = partition(arr, high, low);

    //left side of the array
    quicksort(arr, partitionIndex - 1, low);

    //right side of the array
    quicksort(arr, high, partitionIndex + 1);
  }

  return arr;
}

let arr = [10, 7, 8, 9, 1, 5];
let N = arr.length;

console.log(quicksort(arr, N - 1, 0));
