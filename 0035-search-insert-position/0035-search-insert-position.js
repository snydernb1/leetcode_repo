/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    // Due to the log n time requirement this problem likely requires binary search
    // Declare a left and right pointer
    // While loop: while left + 1 !== right
    // declare and find middle index => left + right / 2, math floor
    // check if nums at middle is equal to less than or greater than target
    // either return if equal or adjust left/right pointer if greater or less than
    
    // conditional,
    // if target is greater than nums[right] then return right + 1
    // if target is less than right return right
    // if target is less than left return left
    
    if (nums.length === 1) {
        
        if (nums[0] >= target) {
            return 0
        } else {
            return 1
        }
        
    }
    
    let l = 0
    let r = nums.length - 1
    
    while (l + 1 !== r) {
        let mid = Math.floor((l+r) / 2)
        
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            l = mid
        } else {
            r = mid
        }
    }
    
    
    if (target > nums[r]) {
        return r + 1
    } else if (target <= nums[r] && target > nums[l]) {
        return r
    } else {
        return l
    }
    
};