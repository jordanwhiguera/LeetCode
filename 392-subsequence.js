//SOLVED: Time O(n) Space O(1)
var isSubsequence = function (s, t) {
  //have pointer be 0, everytime there is a matching letter, increment by 1
  //if pointer = s.length return true
  let pointer = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[pointer] === t[i]) {
      pointer++;
    }
  }
  return pointer === s.length;
};
