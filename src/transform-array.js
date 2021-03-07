const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("not an Array!");
  }
  if (typeof arr != "object" || arr === null) {
    return false;
  } else {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
      array.push(arr[i]);
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] == "--discard-next" && array[i - 2] != "--double-next") {
        array[i + 1] = undefined;
        array.splice(i, 1);
      }
      if (array[i] == "--discard-prev") {
        array[i - 1] = undefined;
        array.splice(i, 1);
      }
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] == "--double-next") {
        if (array[i + 1] != undefined) {
          array[i] = array[i + 1];
        } else {
          array.splice(i, 1);
        }
      }
      if (array[i] == "--double-prev") {
        if (array[i - 1] != undefined) {
          array[i] = array[i - 1];
        } else {
          array.splice(i, 1);
        }
      }
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] == undefined) {
        array.splice(i, 1);
        i--;
      }
      if (array[i] == "--discard-next") {
        array.splice(i, 1);
      }
    }
    return array;
  }
};
