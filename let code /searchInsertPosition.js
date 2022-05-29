//Search Insert Position 


var searchInsert = function(nums, target) {
    let i = 0;
    while (nums[i] < target) {
        i++;
    }
    return i;
}

//searchInsert([1,3,5,6], 5)    //2
//searchInsert([1,3,5,6], 2)    //1
//searchInsert([1,3,5,6], 7)    //4
//searchInsert([1,3,5,6], 0)    //0

//search on sorted array
var searchInsert = function(nums, target) {
    let i = 0;
    while (nums[i] < target) {
        i++;
    }
    return i;
}   //end searchInsert

//create function to sum array of numbers and return sum of all numbers and return the max number in the array and min number in the array
var maxSum = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        if (nums[i] < min) {
            min = nums[i];
        }
        sum += nums[i];
    }
    return [sum, max, min];
}   //end maxSum