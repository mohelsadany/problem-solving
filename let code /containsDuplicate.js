/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map={};
    for(const num of nums){
        if(map[num]){
            
            return true;
        }
        map[num]= true;
    }
    return false;
    
};
// _________________________________//

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    nums = nums.sort();
      for(let i =0; i< nums.length; i++){
          if(nums[i] == nums[i+1]){
              return true;
          }
      }
      return false;
  };