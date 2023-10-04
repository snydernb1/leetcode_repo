/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    // declare a variable and set to 1
    // while loop, while var * var is less than num
    // conditional to check if var * var === num, if so return true
    // increment var
    
    // if the loop exits return false
    
    let root = 1
    
    while (root * root <= num) {
        if (root * root === num) {
            return true
        }
        
        root++
    }
    
    return false
    
};