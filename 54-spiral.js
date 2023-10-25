//SOLVED: Time O(m*n) Space O(m*n)
function spiralOrder(matrix) {
  //matrix.length is #of rows and matrix[0].length is # of col
  //if either 0, return empty array.
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  //indeces of row and col boundaries
  const result = [];
  let rowBegin = 0,
    rowEnd = matrix.length - 1,
    colBegin = 0,
    colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // Traverse right
    //go through first row
    for (let i = colBegin; i <= colEnd; i++) {
      result.push(matrix[rowBegin][i]);
    }
    //once reach very end, go down
    rowBegin++;

    // Traverse down
    for (let i = rowBegin; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;
    //move col end marker to the left

    // Make sure we still have rows to traverse
    if (rowBegin <= rowEnd) {
      // Traverse left
      for (let i = colEnd; i >= colBegin; i--) {
        result.push(matrix[rowEnd][i]);
      }
      //move row end marker up
      rowEnd--;
    }

    // Make sure we still have columns to traverse
    if (colBegin <= colEnd) {
      // Traverse up
      for (let i = rowEnd; i >= rowBegin; i--) {
        result.push(matrix[i][colBegin]);
      }
      //move col begin marker to the right
      colBegin++;
    }
  }

  return result;
}
