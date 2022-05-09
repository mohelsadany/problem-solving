/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const count = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    count[char] = count[char] + 1 || 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (count[char] === 1) {
      return i;
    }
  }
  return -1;
};
