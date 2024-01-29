/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Time Complexity is O(n), and Space complexity is O(1)
function isIsomorphic(s, t) {
  let mapST = {};
  let mapTS = {};
  for (let i = 0; i < s.length; i++) {
    if (
      (mapST[s[i]] && mapST[s[i]] !== t[i]) ||
      (mapTS[t[i]] && mapTS[t[i]] !== s[i])
    ) {
      return false;
    }
    mapST[s[i]] = t[i];
    mapTS[t[i]] = s[i];
  }
  return true;
}
