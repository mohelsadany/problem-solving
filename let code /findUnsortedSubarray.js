/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    if (!nums || nums.length <= 1) return 0;
    let len = nums.length;
    let l = 0;
    let r = len - 1;
    
    // Scan from left to right and find the first element
    // which is greater than the next element
    for (; l < len; l++) {
        if (nums[l] > nums[l + 1]) break;
    }
    if (l === len) return 0; // sorted already!
    // Scan from right to left and find the first element
    // which is smaller than the next element
    for (; r > 0; r--) {
        if (nums[r] < nums[r - 1]) break;
    }
    
    // Find the minimum and maximum values in arr[l..r]
    let arr = nums.slice(l, r + 1);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    // Find the first element (if there is any) in arr[0..l]
    // which is greater than min
    for (let i = 0; i < l; i++) {
        if (nums[i] > min) {
            l = i;
            break;
        }
    }
    
    // Find the last element (if there is any) in arr[r..n-1]
    // which is smaller than max
    for (let i = len ; i > r; i--) {
        if (nums[i] < max) {
            r = i;
            break;
        }
    }
    
    let gap = r - l + 1;
    return gap;
};