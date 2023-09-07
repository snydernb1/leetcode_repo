/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    // Iterate through nums and swap where index = val to the end 
    // maybe use 2 pointers? 
        // establish left and right pointers
        // while right !== the nums length
        // if left === val and right does not, swap left and right 
        // otherwise start moving right until above condition works
        // after swap increment left
    // Iterate through the shuffled nums backwards while the last num === val 
    // Pop off the top of the arr at each loop
    // Once loop exits return the length of nums
    
    if (nums.length === 0) {
        return 0
    }
    
    
    let left = 0
    let right = left + 1
    
    while (right !== nums.length) {
        
        if (nums[left] !== val) {
            left++
            right = left + 1
        } else if (nums[left] === val && nums[right] !== val) {
            let tempLeft = nums[left]
            let tempRight = nums[right]
            
            nums[left] = tempRight
            nums[right] = tempLeft
            
            left++
            right = left + 1
        } else {
            right++
        }
        
        
    }
    
    let index = nums.length - 1
    
    while (nums[index] === val) {
        nums.pop()
        index--
    }
    
    
    return nums.length
    
    
    
    
    
};