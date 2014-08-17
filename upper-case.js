/**
 * Upper case a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str) {
  return str == null ? '' : String.prototype.toUpperCase.call(str);
};
