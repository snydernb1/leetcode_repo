/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    
    // Declare a count variable
    // iterate over nums, maybe start at 1 and end one early?
    // 
    
    let count = 0
    
    
    let curr = 1
    let prev = curr - 1
    let next = curr + 1
    
    while (curr <= nums.length - 2) {
        
        console.log('curr', curr)
        console.log('length', nums.length - 2)
        
        if (nums[curr] > nums[prev] && nums[curr] > nums[next]) { //hill
            
            if (curr + 1 === next) {
            count++
            curr++
            prev++
            next++
            } else {
                curr = next
                prev = curr - 1
                next = curr + 1
                count++
            }
       
        } else if (nums[curr] < nums[prev] && nums[curr] < nums[next]) { //valley
                
            if (curr + 1 === next) {
            count++
            curr++
            prev++
            next++
            } else {
                curr = next
                prev = curr - 1
                next = curr + 1
                count++
            }
        } else if (nums[curr] === nums[prev]) { //just move onto next
            curr++
            prev++
            next++
        } else if (nums[curr] === nums[next]) { //find other side
            next++
        } else {
                curr = next
                prev = curr - 1
                next = curr + 1
        }
        
        
    }
    
    
    
    return count
    
};