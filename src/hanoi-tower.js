const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let number = 2 ** disksNumber - 1;
  let time = Math.floor(number / (turnsSpeed / 3600));
  return { turns: number, seconds: time };
};
