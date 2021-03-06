//70. Climbing Stairs (Easy) https://leetcode.com/problems/climbing-stairs/
// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Note: Given n will be a positive integer.
// Example 1:
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step

var climbStairs = function(n) {
    if (n < 2) return 1;
    var prev = 1;
    var curr = 2;
    for (var i = 2; i < n; i++) {
        var temp = curr;
        curr += prev;
        prev = temp;
    }
    return curr;
}
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));