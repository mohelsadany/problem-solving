//1460. Make Two Arrays Equal by Reversing Sub-arrays (easy) (https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/)
var canBeEqual = function(target, arr) {
    var targetMap = {};
    for (var i = 0; i < target.length; i++) {
        if (targetMap[target[i]]) {
            targetMap[target[i]]++;
        } else {
            targetMap[target[i]] = 1;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (targetMap[arr[i]]) {
            targetMap[arr[i]]--;
        } else {
            return false;
        }
    }
    return true;
}
console.log(canBeEqual([1,2,3], [1,2,3]));
console.log(canBeEqual([1,2,3], [1,2,3,4]));
console.log(canBeEqual([1,2,3], [1,2,3,4,5]));
console.log(canBeEqual([1,2,3], [1,2,3,4,5,6]));