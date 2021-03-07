const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value == "undefined") {
      value = "( )";
      this.chain.push(value);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof position == "number" && position < this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw Error;
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let output = this.chain.join("~~");
    this.chain = [];
    return output;
  },
};

module.exports = chainMaker;
