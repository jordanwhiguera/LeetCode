//SOLVED: Time O(m*n) Space O(m+n)
function setZeroes(matrix) {
  //rows
  let m = matrix.length;
  //cols
  let n = matrix[0].length;

  //make an array, rows, and set each item to false
  //make an array cols, and set each item to false
  let rows = new Array(m).fill(false);
  let cols = new Array(n).fill(false);

  // Mark the rows and columns that need to be set to zero
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        //if a specific square is 0, that entire row and col needs to be set to 0
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  // Set the rows and columns to zero
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //if rows or col is true, that entire row and entire col needs to be 0.
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }
}
