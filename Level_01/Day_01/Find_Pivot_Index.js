var pivotIndex = function(nums) {
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    }
    
    let leftSum = 0
    for (let i = 0; i < nums.length; i++) {
        if (leftSum * 2 == total - nums[i]) 
        return i;
          leftSum += nums[i]
    }
        return -1
};