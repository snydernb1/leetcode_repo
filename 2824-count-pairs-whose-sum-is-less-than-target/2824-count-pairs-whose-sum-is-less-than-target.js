/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    
    //old:
    // Input: nums = [-1,1,2,3,1], target = 2
    
    // Declare a varaible to hold the hash map
    
    // For loop to iterate through the nums arr
    // Conditional if the nums[i] is positive or negative 
    // Declare a variable to hold the pair
    // if positive, we can subtract target - nums[i]
    // else if, negative we can add target + abs(nums[i])
    // check 
    
    // Conditional to check if 
    
    
    // General thoughts:
    
    // Brute approach nested loop?
    // Two pointer approach might work?
    // Order Arr and then we could use a two pointer strat
    // nums = [-1,1,2,3,1]
    //          L R    
    
    // Hash map to track pairs as we iterate through the arr
    
    
    // Psuedo Code:
    // Input: nums = [-1,1,2,3,1], target = 2
    // Input: nums = [-1,1,1,2,3], target = 2
    //                 L     R  
    
    // Order nums
    // Declare a count
    
    // For loop to iterate through the arr
    
    
    
    // Declare left pointer = i
    // Declare right pointer = i + 1
    
    // Conditional, if Left + right >= target => Break
    
    // While loop: while left + right < target
    
    // count++
    // right++
    
    // return count
    
    // Input: nums = [-1,1,2,3,1], target = 2
    // Input: nums = [-1,1,1,2,3], target = 2
    //                   L R
    
    nums.sort((a, b) => { //nums = [-1,1,1,2,3]
        return a-b
    })
    
    // console.log('This is nums', nums)
    
    let count = 0; // 1
    
    for (let left = 0; left < nums.length; left++) {
        
        let right = left + 1
        
        if (nums[left] + nums[right] >= target) {
            break
        }
        
        while (nums[left] + nums[right] < target) {
            count++
            right++
        }
        
    }
    
    return count;
    
    
    
    
};