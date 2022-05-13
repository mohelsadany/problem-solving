/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  var res = [];
  helper(turnedOn, 0, 0, res, 0);
  return res;
};

var helper = function (turnedOn, hours, minute, res, index) {
  if (turnedOn < 0 || index > 10 || hours > 11 || minute > 59) {
    return;
  } else if (turnedOn === 0) {
    res.push(hours + ':' + (minute < 10 ? '0' + minute : minute));
  } else if (index < 4) {
    helper(turnedOn - 1, hours + Math.pow(2, index), minute, res, index + 1);
    helper(turnedOn, hours, minute, res, index + 1);
  } else if (index >= 4) {
    helper(turnedOn - 1, hours, minute + Math.pow(2, index - 4), res, index + 1);
    helper(turnedOn, hours, minute, res, index + 1);
  }
};
