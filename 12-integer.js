//SOLVED: Time O(1) and SPACE O(1)
var intToRoman = function (num) {
  let output = "";

  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  for (let i = 0; i < values.length; i++) {
    //Need the while loop because if have num =20,
    //the output should be XX . Thw WHile loop allows duplicate X.
    while (num >= values[i]) {
      num -= values[i];
      output += symbols[i];
    }
  }

  return output;
};
