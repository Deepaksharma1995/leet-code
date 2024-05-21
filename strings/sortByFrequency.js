function frequencySort(s) {
  let seen = {};
  for (let char of s) {
    seen[char] ? seen[char]++ : (seen[char] = 1);
  }

  let sortedObject = Object.keys(seen).sort((a, b) => seen[b] - seen[a]);

  let result = "";

  for (let char of sortedObject) {
    result += char.repeat(seen[char]);
  }
  return result;
}

frequencySort(
  "abbcccdddddeeeeeeffffffgggggggAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBKKKKKKKKKKKKKKQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ"
);
