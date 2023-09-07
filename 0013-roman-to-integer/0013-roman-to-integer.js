/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    // Create hashmap with symbol conversions
    // Declare a variable to keep count of total
    // iterate through s
    // at each index, check hash map for val
    // set of conditionals to check if I is before V/X, X is before L/C, C is before D/M
    // if so, subtract the next index val from the current index val and add then increment count 
    // finally return
    
    const hashMap = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    }
        
    let total = 0
    
    
    for (let i = 0; i < s.length; i++) {
        
        let curr = s[i]
        let next = s[i + 1]
        
        // console.log('curr', curr)
        // console.log('next', next)
        // console.log('total', total)
        // console.log('i', i)
        
        if (curr === 'I' && (next === 'V' || next === 'X')) {
           
            total += hashMap[next] - hashMap[curr]
            i++
        } else if (curr === 'X' && (next === 'L' || next === 'C')) {
         
            total += hashMap[next] - hashMap[curr]
            i++
        } else if (curr === 'C' && (next === 'D' || next === 'M')) {
          
            total += hashMap[next] - hashMap[curr]
            i++
        } else {
            total += hashMap[curr]
        }
        
        
    }
        
        return total
    
};