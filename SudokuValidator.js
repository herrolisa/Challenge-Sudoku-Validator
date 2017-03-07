/*  SudokuValidator(sudoku)
 *
 *  @param sudoku                       a multidimensional array containing the sudoku puzzle
 *
 *  @public property sudoku             the sudoku grid
 *
 *  @public method validate(num)        num is the perfect squared value of an integer
                                        for example: 9(result of 3^3) & 4 (2^2).
 */

exports.SudokuValidator = SudokuValidator;

function SudokuValidator(sudoku){
  this.sudoku = sudoku;
}

SudokuValidator.prototype.validate = function(num){
  // Do work here
  var checkAgainst = [];
  for (var i = 1; i < num + 1; i++) {
    checkAgainst.push(i);
  }
  // Check Rows
  for (var j = 0; j < num; j++) {
    for (var k = 0; k < num ; k++) {
      var rowTruthy = this.sudoku[j].every(function (elem, idx, arr) {
        return checkAgainst.indexOf(elem) !== -1 && arr.indexOf(elem) === arr.lastIndexOf(elem);
      });
      if (rowTruthy === false){
        return false;
      }
    }
  }
  // Check Columns
  for (var l = 0; l < num; l++) {
    var columnArr = [];
    for (var m = 0; m < num; m++) {
      columnArr.push(this.sudoku[m][l]);
    }
    var colTruthy = columnArr.every(function (elem, idx, arr) {
      return arr.indexOf(elem) === arr.lastIndexOf(elem);
    })
    if (colTruthy === false){
      return false;
    }
  }
  return true;
}