/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    
    // Establish two pointers
    // check middle index left/right
    // if left and right are lower than mid return index
    // else :
    // move appropriate pointer and repeat
    
    if (nums.length === 1) {
        return 0
    }

    
    let left = 0
    let right = nums.length - 1
    
    while (left < right) {
        
        let mid = Math.floor((left + right) / 2)
        
        if (left + 1 === right) {
            if (nums[left] > nums[right]) {
                return left
            } else {
                return right
            }
        }
        
        if (nums[mid - 1] < nums[mid] && nums[mid + 1] < nums[mid]) {
            return mid
        } else if (nums[mid + 1] > nums[mid]) {
            left = mid
        } else {
            right = mid
        }
        
        
        
    }
    
    
    
    
};