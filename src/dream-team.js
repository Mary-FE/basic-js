const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(data) {
  let symbols = [];

  if (Array.isArray(data)) {
    data.forEach((name) => {
      if (typeof name == 'string') {
        symbols.push(name.trim()[0].toUpperCase());
      }
    });

    return symbols.sort((a, b) => a.localeCompare(b)).join('');
  } 
  
  return false;
}

module.exports = {
  createDreamTeam
};
