//Search Insert Position 


var searchInsert = function(nums, target) {
    let i = 0;
    while (nums[i] < target) {
        i++;
    }
    return i;
}