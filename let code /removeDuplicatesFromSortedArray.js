/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    const length = nums.length;
    if (length <= 1){
        return length;
    }
    
    let i = 0;
    for(let j = 0; j < length; j++){
        if(nums[i] != nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
    
};