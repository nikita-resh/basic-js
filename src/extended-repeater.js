const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let defaultProperties = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|",
  };

  //choose between default and ... parametrs
  options.repeatTimes = options.repeatTimes || defaultProperties.repeatTimes;
  options.separator = options.separator || defaultProperties.separator;
  options.additionRepeatTimes =
    options.additionRepeatTimes || defaultProperties.additionRepeatTimes;
  options.additionSeparator =
    options.additionSeparator || defaultProperties.additionSeparator;

  // options.addition = options.addition || defaultProperties.addition;

  if (options.addition === undefined) {
    options.addition = "";
  } else {
    options.addition = String(options.addition);
  }
  // str = String(str);
  options.addition = String(options.addition);

  let output = "";

  for (let i = 0; i < options.repeatTimes; i++) {
    output = output + str;

    for (let n = 0; n < options.additionRepeatTimes; n++) {
      output = output + options.addition;
      if (n < options.additionRepeatTimes - 1) {
        output = output + options.additionSeparator;
      }
    }
    if (i < options.repeatTimes - 1) {
      output = output + options.separator;
    }
  }
  return output;
};
