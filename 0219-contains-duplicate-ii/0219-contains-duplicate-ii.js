/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    // i = 0, j = 3
    
    //  i = 0, j = 2, i = 2, j = 3
    
    // We are checking for duplicates then checking their indices meet the condition less than k
    
    // Thoughts:
    
    // hashmap, to track the duplicate val coulde be the key and then the indices could be the value
    // Brute force, nested loop
    // If we put the array in a set, that will give us just the duplicates, 
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                if (Math.abs(i-j) <= k) {
                    return true
                }
            }
        }
    }
    
    return false
    
};