/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    
    let direction
    
    if (nums[0] <= nums[nums.length - 1]) {
        direction = 'increase'
    } else {
        direction = 'decrease'
    }
    
    for (let i = 0; i < nums.length; i++) {
        
        if (direction === 'increase') {
            
            if (nums[i] > nums[i+1]) {
                return false
            }
            
        } else {
            
            if (nums[i] < nums[i+1]) {
                return false
            }
            
            
        }
        
    }
    
    
    return true
    
};