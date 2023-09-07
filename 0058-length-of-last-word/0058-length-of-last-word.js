/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    // Use .split to convert string into arr on space
    // iterate backwards till the index has length 
    // return length
    
//     let arr = s.split(' ')
    
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i].length) {
//             return arr[i].length
//         }
//     }
    
    // Declare a count variable
    // Iterate through the string backwards
    // once we get to a non empty character start counting 
    // return count once we hit another empty string character
    
    let count = 0

    
     for (let i = s.length - 1; i >= 0; i--) {
         
         if (count > 0 && s[i] === " ") {
             return count
         }
         
         if (s[i] !== " ") {
             count++
         }
         
     
    }
    
    return count
    
    
};