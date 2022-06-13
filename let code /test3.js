var twoSum = function(nums, target) {
    var hash = {};
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (hash[diff] !== undefined) {
            return [hash[diff], i];
        }
        hash[nums[i]] = i;
    }
}

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
console.log(twoSum([2, 7, 11, 15], 9))
