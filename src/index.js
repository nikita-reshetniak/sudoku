module.exports = function solveSudoku(matrix) {
  // your solution
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (matrix[y][x] == 0) {
        for (let n = 1; n < 10; n++) {
          if (possible(y, x, n, matrix)) {
            matrix[y][x] = n;
            if (solveSudoku(matrix)) {
              return matrix;
            } else {
              matrix[y][x] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return matrix;
}

function possible(y, x, n, grid) {
  // Check row
  for (let i = 0; i < 9; i++) {
    if (grid[y][i] == n) return false;
  }

  // Check column
  for (let i = 0; i < 9; i++) {
    if (grid[i][x] == n) return false;
  }

  // Check square
  y0 = Math.floor(y / 3) * 3;
  x0 = Math.floor(x / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[y0 + i][x0 + j] == n) return false;
    }
  }

  return true;
}

// for (let y = 0; y < 9; y++) {
//   for (let x = 0; x < 9; x++) {
//     if (matrix[y][x] == 0) {
//       for (let n = 1; n < 10; n++) {

//         let isPossible = true;

//         // Check row
//         for (let i = 0; i < 9; i++) {
//           if (matrix[y][i] == n) {
//             isPossible = false;
//             break;
//           };
//         }

//         // Check column
//         if (isPossible) {
//           for (let i = 0; i < 9; i++) {
//             if (matrix[i][x] == n) {
//               isPossible = false;
//               break;
//             };
//           }
//         }

//         // Check square
//         y0 = Math.floor(y / 3) * 3;
//         x0 = Math.floor(x / 3) * 3;
//         for (let i = 0; i < 3; i++) {
//           if (isPossible) {
//             for (let j = 0; j < 3; j++) {
//               if (matrix[y0 + i][x0 + j] == n) {
//                 isPossible = false;
//                 break;
//               };
//             }
//           } else {
//             break;
//           }
//         }
//         if (isPossible) {
//           matrix[y][x] = n;
//           if (solveSudoku(matrix)) {
//             return true;
//           } else {
//             matrix[y][x] = 0;
//           }
//         }
//       }
//       return false;
//     }
//   }
// }
// return true;