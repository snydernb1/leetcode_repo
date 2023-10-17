/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    // iterate through flowerbed
    // if index is 0 and adjacent spots are 0, decrement n
    // conditional, if n is 0 return true else return false
    
    for (let i = 0; i < flowerbed.length; i++) {
        
        if (flowerbed[i] === 0 && (flowerbed[i-1] === 0 || flowerbed[i-1] === undefined) && (flowerbed[i+1] === 0 || flowerbed[i+1] === undefined)) {
            flowerbed[i] = 1
            n--
        }
    }
    
    if (n > 0) {
        return false
    } else return true
    
};