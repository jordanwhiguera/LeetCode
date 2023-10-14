//SOLVED: TIME O(n) Space O(n)
function reverseWords(s) {
  // Split the string into words, EX: "HI MOM" => ["HI", "", "MOM"]. everytime a space we get ""
  // filter out any empty strings, ["HI","MOM"]
  //reverse the words, ["MOM", "HI"]
  //and then join them back with a single space " MOM HI"
  return s
    .split(" ")
    .filter((word) => word)
    .reverse()
    .join(" ");
}
