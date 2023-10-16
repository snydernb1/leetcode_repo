/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    // iterate through a while loop and increment the number of time you multiply 2 by itself
    // conditional to check for 1 which is edge case
    // declare a varaible for the current power num
    // declare variable for the current power
    // iterate till power num is greater than n
    // if they are equal return true else false
    
    if (n === 1) {
        return true
    } 
    
    let val = 2
    let power = 1
    
    while (val <= n) {
        
        if (val === n) {
            return true
        }
        
        val *= 2
        power++
        
    }
    
    return false
    
};