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
  for (var i = 0; i < num; i++) {
    for (var i = 0; i < num ; i++) {
      var truthy = this.sudoku[i].every(function (elem, idx, arr) {
        return checkAgainst.indexOf(elem) !== -1 && arr.indexOf(elem) === arr.lastIndexOf(elem);
      });
      if (truthy === false){
        return false;
      }
    }
  }
  return true;
}