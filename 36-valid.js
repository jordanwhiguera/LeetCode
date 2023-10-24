//SOLVED: Time O(1) Space O(1)
function isValidSudoku(board) {
  //use set because more efficient to check if item inside of it
  const seen = new Set();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // i is the row and j is the col
      //const num will store a number
      //IN Ex1: board[0][0]=5 which means num =5
      //need const becasuse num is not reassigned
      const num = board[i][j];
      if (num !== ".") {
        // if we encounter a number, we store all these strings in the array.
        //EX: need because check if 5 in row 0, 5 in col 0. 5 in box 0-0. if another 5 in row 0, this is not valid sodoku.
        const rowStr = `${num} in row ${i}`;
        const colStr = `${num} in col ${j}`;
        const boxStr = `${num} in box ${Math.floor(i / 3)}-${Math.floor(
          j / 3
        )}`;
        //if any of strings already in set return false.
        if (seen.has(rowStr) || seen.has(colStr) || seen.has(boxStr)) {
          return false;
        }
        //else unique and add string
        seen.add(rowStr);
        seen.add(colStr);
        seen.add(boxStr);
      }
    }
  }

  return true;
}
