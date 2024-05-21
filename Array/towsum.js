function TwoSum(arr, target) {
  const store = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (store.has(target - arr[i])) {
      return [arr.indexOf(store.get(target - arr[i])), i];
    } else {
      store.set(arr[i], arr[i]);
    }
  }
}
