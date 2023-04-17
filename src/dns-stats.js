const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let values = domains.join('.').split('.').reverse(),
      DNS = [...new Set(values)],
      key = '',
      result = {};
  
  if (!domains.length) return {};

  for (let index = 0; index < DNS.length; index++) {
      key += `.${DNS[index]}`;
      result[key] = values.filter((item) => item == DNS[index]).length;
  }

  return result;
}

module.exports = {
  getDNSStats
};
