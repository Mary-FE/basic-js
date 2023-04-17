const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let times = options?.repeatTimes ? options.repeatTimes : 1,
      separator = options?.separator ? options.separator : '+',
      addition = options?.addition ? options.addition : '',
      additionTimes = options?.additionRepeatTimes ? options.additionRepeatTimes : 1,
      additionSeparator = options?.additionSeparator ? options.additionSeparator : '|',
      resultArray = new Array(times),
      additionArray = new Array(additionTimes),
      additionStr = '';
      
  if (options?.addition === null) addition = 'null';
  if (options?.addition === false) addition = 'false';
  if (typeof addition[Symbol.toPrimitive] === 'function') addition = addition[Symbol.toPrimitive]();
  if (str === null) str = 'null';
  if (typeof str[Symbol.toPrimitive] === 'function') str = str[Symbol.toPrimitive]();

  additionArray.fill(addition.toString());
  additionStr = additionArray.join(additionSeparator);
  resultArray.fill(str.toString() + additionStr);
      
  return resultArray.join(separator);
}

module.exports = {
  repeater
};
