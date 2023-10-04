/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    
    // create hashmap to track roots we've tried
    // create a var to and set to 1
    
    // while loop, while var * var < c
    // conditional to check if c - var*var is in hashmap
        // if so, return true
    
    // add to var * var to hashmap
    // increment var
    
    // exit loop, return false
    
    
    let hash = {}
    
    let root = 0
    
    while ((root * root) <= c) {
        
        
        
        let searchVal = c - (root * root)
        hash[`${root*root}`] = root*root
    // console.log('hash', hash)
        if (hash[`${searchVal}`] === searchVal) {
            return true
        }
        
        // hash[`${root*root}`] = root*root
        root++
    }
    
    return false
    
};