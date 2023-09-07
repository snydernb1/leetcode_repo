/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    // I think we want to reverse through the array
    // conditional, if digits[i] < 10 => incriment current val and break
    // else, set val to 0 and iterate to the next index
    // at the end of the loop return digits
    
    for (let i = digits.length - 1; i >= 0; i--) {
        
        if ((digits[i] + 1) < 10) {
            digits[i] += 1
            break
        } else if (i === 0){
            digits[i] = 0
            digits.unshift(1)
        } else {
            digits[i] = 0
        }
    }
    
    return digits
    
};