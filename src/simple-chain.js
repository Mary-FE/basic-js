const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
      return this.chain.length;
  },

  addLink(val) {
      this.chain.push(val);
      return this;
  },
  removeLink(position) {
      if (!+position || position <=0 || position > this.getLength()) {
          this.chain = [];
          throw Error(`You can't remove incorrect link!`);
      }

      this.chain.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
      this.chain.reverse();
      return this;
  },
  finishChain() {
      let result = this.chain.map((item) => `( ${item} )`);
      this.chain = [];
      return result.join('~~');
  }
};

module.exports = {
  chainMaker
};
