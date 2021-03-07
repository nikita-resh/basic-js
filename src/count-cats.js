const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  matrix = matrix.join(",");
  matrix = matrix.split(",");
  let number = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] == "^^") {
      number++;
    }
  }
  return number;
};
