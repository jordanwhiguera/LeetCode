//SOLVED: Time O(n) Space O(1)
var lengthOfLastWord = function (s) {
  let length = 0;
  //dont ned to convert string into array since strings can be treated like arrays. if we onvert into array that makes space complexity O(n)

  // Start from the end of the string since want last word
  for (let i = s.length - 1; i >= 0; i--) {
    // If the current character is a space and length is greater than 0, break out of the loop.
    //break exits out for loop
    //EX: "Hello "=> there is a spce after 'o' but there is no break since length is 0.

    if (s[i] === " " && length > 0) {
      break;
    }
    // If the current character is not a space, increment the length
    if (s[i] !== " ") {
      length++;
    }
  }

  return length;
};
