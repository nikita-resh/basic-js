const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members != "object" || members === null) {
    return false;
  }
  let string = "";
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      while (members[i][0] == " ") {
        members[i] = members[i].slice(1, members[i].length);
      }
      string += String(members[i][0]);
    }
  }
  string = string.toUpperCase().split("").sort().join("");
  return string;
};
