// check if input N x N matrix is a valid sub sudoku puzzle
// to be valid, each column and row must have only 1 each of 1..N integers
// return 'VALID' if valid and 'INVALID' if not

function checkSubSudoku(matrix) {
   const N = matrix.length;

   for (let i = 0; i < N; i++) {
     if (!checkArray(matrix[i])) return 'INVALID';
   }

   for (let i = 0; i < N; i++) {
     const column = [];
    for (let j = 0; j < N; j++) {
      column.push(matrix[j][i]);
    }
    if (!checkArray(column)) return 'INVALID';
   }
   return 'VALID';
 }


 // helper to check if array is valid
function checkArray(array) {
  const arrayCheck = new Array(array.length + 1).fill(0);
  arrayCheck[0] = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array.length || array[i] < 1) return false;
    arrayCheck[array[i]] = arrayCheck[array[i]] + 1;
  }

  return arrayCheck.every((val) => val === 1);
}

 const matrixA = [
   [1, 2, 3, 4],
   [2, 3, 4, 1],
   [3, 4, 1, 2],
   [4, 1, 2, 3],
 ];
 console.log(checkSubSudoku(matrixA)); // 'VALID'

 const matrixB = [
   [100, 1, 3],
   [2, 3, 1],
   [1, 2, 3]
 ];
 console.log(checkSubSudoku(matrixB)); // 'INVALID'