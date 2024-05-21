function reverseWords(s) {
  let auxString = "";
  let result = "";

  for (let letter of s) {
    // console.log(letter);
    if (letter === " ") {
      if (auxString !== "") {
        result = " " + auxString + result;
        auxString = "";
      }
      continue;
    } else {
      //   console.log(auxString);
      auxString += letter;
    }
  }

  return auxString + " " + result;
}

reverseWords("a good   example");
