/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    // Questions:
    // 1. Can I use .includes method to solve this problem?
    // 2. 
    
    // General Thoughts:
    // Sliding Window
    
    // Pseudo Code:
    
    // 1. Conditional, if needle length is longer than haystack length return -1
    // 2. Conditional to check if needle and haystack length === 1 
    // 2.5 Nested Conditional to check if needle[0] === haystack[0], if so return 0 else -1
    // 3. For loop: to iterate through the haystack, define left if for loop
    // 3.5 Define variable at start of needle
    // 3.6 Define right as left + 1
    // 4. While loop: if haystack and needle equal each other at left and right pointer
    // 5. Conditional, if the length - 1 of the needle === the difference between left and right pointer => return left pointer
    // 6. else, incriment right pointer
    // 7. Exit for loop and return -1
    
    // I: h = "sadbutsad", n = "sad"
    // O: 0
    
    // I: h = "leetcode", n = "leeto"
    // O: -1
       
    // I: h = "a", n = "a"
    // O: 0
    
    if (needle.length > haystack.length) { // 5 > 8 = false
        return -1
    }
    
    // if (needle.length === 1 && haystack.length === 1) {
    //     if (needle[0] === haystack[0]) {
    //         return 0
    //     } else {
    //         return -1
    //     }
    // }
    
    for (let left = 0; left < haystack.length; left++) { // left = 0
        let needleLeft = 0 // needleLeft = 0
        let needleRight = needleLeft + 1 // needleRight = 1
        let right = left + 1 // right = 1
        
        if (needle.length === 1 && needle[0] === haystack[left]) {
            return left
        }
        
        while (haystack[left] === needle[needleLeft] && haystack[right] === needle[needleRight]) { // a === a && undefined? === undefined?
            if (needle.length - 1 === needleRight - needleLeft) { // 0 == 1  = false // || (needle.length === 1 && needle[needleLeft] === haystack[left])
                return left
            } else {
                right++
                needleRight++
            }
        }
        
    }
    
    return -1
    
};