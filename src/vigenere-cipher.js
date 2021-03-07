const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    if (typeof message == "undefined" || typeof key == "undefined") throw Error;
    message = message.toUpperCase();
    key = key.toUpperCase();
    let temporary = "";
    let k = 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        temporary += message[i];
      } else {
        temporary += key[k % key.length];
        k++;
      }
    }
    let output = "";
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        output += temporary[i];
      } else {
        output += String.fromCharCode(
          ((message.charCodeAt(i) - 65 + temporary.charCodeAt(i) - 65) % 26) +
            65
        );
      }
    }
    return output;
  }
  decrypt(message, key) {
    if (typeof message == "undefined" || typeof key == "undefined") throw Error;
    message = message.toUpperCase();
    key = key.toUpperCase();
    let temporary = "";
    let k = 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        temporary += message[i];
      } else {
        temporary += key[k % key.length];
        k++;
      }
    }
    let output = "";
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        output += temporary[i];
      } else {
        output += String.fromCharCode(
          ((message.charCodeAt(i) - temporary.charCodeAt(i) + 26 + 26) % 26) +
            65
        );
      }
    }
    return output;
  }
}

module.exports = VigenereCipheringMachine;
