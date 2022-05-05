
var twoSum = function(nums, target) {
    for (let i =0; i<nums.length; i++){
        for(let j=i+1; j<nums.length;i++){
            if(nums[i]+ nums[j] == target){
                return [i,j]
            }
        }
    }
};


// _________________________________________//



 var twoSum = function(nums, target) {
    const indices = {};

   nums.forEach((item, index) => {
       indices[item] = index
   });

   for (let index = 0; index < nums.length; index++) {
       const complement = target - nums[index];

       if (indices[complement] !== undefined && indices[complement] !== index) {
           return [index, indices[complement]]
       }
   }
};

// _________________________________________//


var twoSum = function(nums, target) {
    const indices = new Map();

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (indices.has(complement)) {
            return [indices.get(complement), index]
        }

        indices.set(nums[index], index)
    }
};