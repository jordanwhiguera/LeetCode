//SOLVED: Time O(n) Space O(n)
function lengthOfLongestSubstring(s) {
  //work with sets because its efficient to check if element is inside
  let set = new Set();
  //answ is length of longest substring. i will alway be behind /left of j
  let ans = 0,
    i = 0;

  for (let j = 0; j < s.length; j++) {
    // if set has s[j], delete elment at s[i]
    //s[i] is the left elemnt in set
    //we  increment the i until we delete until element s[j]is removed
    // set =abc and trying to add a, we remove left elemtn until remove
    // a and get bc
    while (set.has(s[j])) {
      set.delete(s[i]);
      i++;
    }
    //then add a to have bca in the set
    set.add(s[j]);
    //length is j-i +1 since 0 indexed
    ans = Math.max(ans, j - i + 1);
  }

  return ans;
}
