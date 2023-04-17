const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

function deleteDigit(n) {
  let max = 0;

  `${n}`.split('').forEach((item, index) => {
      let bool = `${n}`.split('');
      bool.splice(index, 1);

      if (max <= +bool.join('')) max = +bool.join('');
  });

  return max;
}

module.exports = {
  deleteDigit
};
