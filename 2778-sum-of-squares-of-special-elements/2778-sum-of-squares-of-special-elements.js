/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    
    // Create a variable to track the count starting at 0
    // create a variable to hold the length of nums
    
    // iterate over nums
    // if the length divided by the index doesn't have a remainder then sqr index and add to count
    
    // return count
    
    let count = 0
    let length = nums.length
    
    for (let i = 1; i <= nums.length; i++) {
        
        if (length % i === 0) {
            count += (nums[i-1] * nums[i-1])
        }
    }
    
    return count
};