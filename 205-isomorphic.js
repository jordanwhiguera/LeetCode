/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Time Complexity is O(n), and Space complexity is O(1)
//EX: Input: s = "paper", t = "title"
//Output: true
function isIsomorphic(s, t) {
  //Need two hashmaps to ensure that the characters in s map uniquely to the characters in t and vice versa.
  let mapST = {};
  let mapTS = {};
  for (let i = 0; i < s.length; i++) {
    if (
      //if the key is already in the map, and the value is not the same as the value in the map, return false
      (mapST[s[i]] && mapST[s[i]] !== t[i]) ||
      (mapTS[t[i]] && mapTS[t[i]] !== s[i])
    ) {
      return false;
    }
    //if the key is not in the map, add it to the map
    mapST[s[i]] = t[i];
    mapTS[t[i]] = s[i];
  }
  return true;
}
