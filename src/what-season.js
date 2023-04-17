const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = [
      'winter', 'winter', 'spring', 
      'spring', 'spring', 'summer', 
      'summer', 'summer', 'autumn', 
      'autumn', 'autumn', 'winter'];

  if (!date) {
      return 'Unable to determine the time of year!';
  }

  if (!isValidDate(date)) {
    throw Error('Invalid date!');
  }

  return seasons[date.getMonth()];
}

function isValidDate(date) {
  try {
    date.toISOString();
    return true;
  }

  catch(ex) {
    return false;    
  }    
}

module.exports = {
  getSeason
};
