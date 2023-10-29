//SOLVED: Time O(n*m) Space O(m), m= magazine length
function canConstruct(ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    //first find the letter in ransomenote[i]
    //then find index of the letter insiide magazine
    let index = magazine.indexOf(ransomNote[i]);
    //if letter not in magazine return false
    if (index === -1) {
      return false;
    }
    //uppdate magazine to be ltters before the found letter and ltter after found letter
    //EX: slice(0,0), first 0 is index to start at and second 0 is index to stop before. in this case (0,0) returns nothings because start at index 0 but stop before index 0.
    //EX: mag ='abcd' , slice(0,1) means we will only have 'a'. slice(2) means start at index 2 and go until end of string so 'cd'. if combine we have 'acd'
    magazine = magazine.slice(0, index) + magazine.slice(index + 1);
  }
  return true;
}
