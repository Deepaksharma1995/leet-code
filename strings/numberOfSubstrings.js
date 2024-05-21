function getAllSubstrings(inputString) {
  // Step 1: Initialize an empty array to store substrings
  let substringsArray = [];

  // Step 2: Iterate through each character in the string
  for (let i = 0; i < inputString.length; i++) {
    // Step 3: Nested loop to generate substrings starting from the current character
    for (let j = i + 1; j <= inputString.length; j++) {
      // Step 4: Extract the substring from the current position (i) to (j)
      let substring = generateSubstring(inputString, i, j);

      // Step 5: Add the substring to the array if it's not already present
      if (!substringsArray.includes(substring)) {
        substringsArray.push(substring);
      }
    }
  }

  // Step 6: Return the array containing all substrings
  return substringsArray;
}

// Helper function to generate substring without using built-in methods
function generateSubstring(inputString, start, end) {
  let substring = "";
  // Iterate from start to end to build the substring
  for (let i = start; i < end; i++) {
    substring += inputString[i];
  }
  return substring;
}

// Example usage:
let inputString = "aabcd";
let result = getAllSubstrings(inputString);
console.log(result);
