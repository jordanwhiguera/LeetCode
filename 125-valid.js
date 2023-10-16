//SOLVED: Time O(n) Space O(n)
var isPalindrome = function (s) {
  //remove any nonletters and replace with empty "", then to lowercase
  const norm = s.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
  //reverse split into array of characters, then reverse array, then join into string
  const rev = norm.split("").reverse().join("");
  return norm === rev;
};
