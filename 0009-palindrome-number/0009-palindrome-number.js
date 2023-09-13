/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
    if (x < 0) {
        return false
    }
    
    
    let i = x
    
    let rev = 0
    
    while (i >= 10) {
    
           let r = i % 10
           
           rev = (rev*10) + r
           
            i = Math.floor(i/10)
    }
    
    rev = (rev*10) + i
    
    if (rev === x) {
        return true
    } else {
        return false
    }
    
    
    
};