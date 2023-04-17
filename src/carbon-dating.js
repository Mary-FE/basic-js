const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(final_activity) {
  if ( !+final_activity || +final_activity > 15 || +final_activity <= 0 || typeof final_activity !== 'string') return false;

  let init_activity = 15,
      half_life = 5730,
      log_activity = Math.log(init_activity / final_activity),
      formula = Math.floor( log_activity / Math.log(.5) * half_life);
      
  return Math.abs(formula);
}

module.exports = {
  dateSample
};
