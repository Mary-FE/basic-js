const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(array) {
  var result = [],
      obj = {};
      
  array.forEach((name) => {
    switch(true) {
      case obj[name] == undefined && result.indexOf(name) == -1:
        result.push(name);
        obj[name] = 0;
        break;

      case obj[name] == undefined && result.indexOf(name) != -1:
        obj[name] = 1;
        result.push(`${name}(${obj[name]})`);
        break;

      default:
        result.push(`${name}(${++obj[name]})`);
    }
  }); 

  return result;
}

module.exports = {
  renameFiles
};
