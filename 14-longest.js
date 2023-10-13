//SOLVED: Time O(m*n) Space O(1)
function longestCommonPrefix(strs) {
  //wont happen since in constrainst strs length >= 1
  if (strs.length === 0) return "";

  // Find the shortest string
  //want shortest because the longest prefix cant be longer than shortest word
  let shortest = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < shortest.length) {
      shortest = strs[i];
    }
  }

  for (let i = 0; i < shortest.length; i++) {
    //loop through each word in array
    for (let str of strs) {
      //checking each letter of each word in array to see if mismatch
      if (str[i] !== shortest[i]) {
        //if there is mismatch take the substring of shoretest from index 0 to index before i.
        return shortest.substring(0, i);
      }
    }
  }
  return shortest;
}
