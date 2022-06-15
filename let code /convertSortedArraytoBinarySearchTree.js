//108. Convert Sorted Array to Binary Search Tree My Submissions Question leetcode
//Total Accepted: 8092 Total Submissions: 25891 Difficulty: Medium
//Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;
    var mid = Math.floor(nums.length / 2);
    var root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
}
console.log(sortedArrayToBST([-10,-3,0,5,9]));
console.log(sortedArrayToBST([-10,-3,0,5,9,15]));

