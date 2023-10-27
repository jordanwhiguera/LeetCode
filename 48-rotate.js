//SOLVED: Time O(n^2) Space O(1)
function rotate(matrix) {
  //# of rows
  const n = matrix.length;

  // Step 1: Transpose the matrix
  for (let i = 0; i < n; i++) {
    //set j=i because transposing matrix and dont want to revert matrix back to original
    for (let j = i; j < n; j++) {
      //row become cols now, and cols are rows
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Step 2: Reverse the columns
  for (let i = 0; i < n; i++) {
    //since reverseing only go through half of the array
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }
}
