/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    // Use .split to convert string into arr on space
    // iterate backwards till the index has length 
    // return length
    
    let arr = s.split(' ')
    
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].length) {
            return arr[i].length
        }
    }
    
    // 
    
};