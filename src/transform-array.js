const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error(`'arr' parameter must be an instance of the Array!`);
  if (!arr.length) return [];

  let result = [];
  let instruction = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  for (let i = 0; i < arr.length; i++) {
      if (!instruction.includes(arr[i])) result.push(arr[i]);

      if (arr[i] == '--discard-next') {
          arr[i + 1] = '';
          i++;
      }  
      if (arr[i] == '--discard-prev') {
          if (typeof arr[i - 1] != 'string') {
              result.pop();
          }
      }
      if (arr[i] == '--double-next')  result.push(arr[i + 1]);
      if (arr[i] == '--double-prev') {
          if (typeof arr[i - 1] != 'string') {
              result.push(arr[i - 1]);
          }
      }  
  }
  
  return result;
}

module.exports = {
  transform
};
