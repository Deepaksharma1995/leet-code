var ladderLength = function (beginWord, endWord, wordList) {
  let queue = [{ word: beginWord, steps: 1 }];
  let wordSet = new Set(wordList);
  wordSet.delete(beginWord);

  while (queue.length > 0) {
    let { word, steps } = queue.shift();

    if (word === endWord) return steps;

    for (let i = 0; i < word.length; i++) {
      let original = word[i];

      for (let j = 97; j <= 122; j++) {
        word =
          word.substring(0, i) + String.fromCharCode(j) + word.substring(i + 1);

        if (wordSet.has(word)) {
          wordSet.delete(word);
          queue.push({ word: word, steps: steps + 1 });
        }
      }

      word = word.substring(0, i) + original + word.substring(i + 1);
    }
  }

  return 0;
};
