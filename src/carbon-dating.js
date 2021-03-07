const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string") {
    if (
      sampleActivity <= 0 ||
      sampleActivity > MODERN_ACTIVITY ||
      !isFinite(sampleActivity)
    ) {
      return false;
    } else {
      return Math.ceil(
        (-HALF_LIFE_PERIOD * Math.log(sampleActivity / MODERN_ACTIVITY)) /
          Math.log(2)
      );
    }
  } else {
    return false;
  }
};
