// Valid Perfect Square - https://leetcode.com/problems/valid-perfect-square/
// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Note: Do not use any built-in library function such as sqrt.
// Example 1:
// Input: 16
// Output: true
var isPerfectSquare = function(num) {
    if (num < 2) return true;
    var left = 1;
    var right = num;
    var mid = 0;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2), midSquared = mid * mid;
      if (midSquared == num ) {
       return true;
      } 
      if(midSquared > num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
}
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));