//SOLVED: Time O(n) Space O(1)
function romanToInt(s) {
  const arr = [...s];
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "M") {
      output += 1000;
    } else if (arr[i] === "D") {
      output += 500;
    } else if (arr[i] === "C" && arr[i + 1] === "M") {
      output += 900;
      i++;
    } else if (arr[i] === "C" && arr[i + 1] === "D") {
      output += 400;
      i++;
    } else if (arr[i] === "C") {
      output += 100;
    } else if (arr[i] === "L") {
      output += 50;
    } else if (arr[i] === "X" && arr[i + 1] === "C") {
      output += 90;
      i++;
    } else if (arr[i] === "X" && arr[i + 1] === "L") {
      output += 40;
      i++;
    } else if (arr[i] === "X") {
      output += 10;
    } else if (arr[i] === "V") {
      output += 5;
    } else if (arr[i] === "I" && arr[i + 1] === "X") {
      output += 9;
      i++;
    } else if (arr[i] === "I" && arr[i + 1] === "V") {
      output += 4;
      i++;
    } else {
      output += 1;
    }
  }

  return output;
}
