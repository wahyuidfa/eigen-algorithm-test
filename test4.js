function diagonalSums(matrix) {
 
        let mainSum = 0, secondarySum = 0;
        for (let row = 0; row < matrix.length; row++) {
            mainSum += matrix[row][row];
            secondarySum += matrix[row][matrix.length - row - 1];
        }
        console.log(mainSum + ' ' + secondarySum);
    let equal = mainSum - secondarySum;
    console.log("maka hasilnya adalah =",equal)
    }

     
    diagonalSums([[1, 2, 0], [4, 5, 6], [7, 8, 9]]);