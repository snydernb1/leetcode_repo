/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    // declare a variable and set to 1
    
    // while loop, while y * y < target
    // increment y
    
    //conditional to check if y * y === target - if yes, return y
    // else return y - 1
    
    let y = 1
    
    while (y * y < x) {
        y++
    }
    
    if (y*y === x) {
        return y
    } else {
        return y - 1
    }
    
};