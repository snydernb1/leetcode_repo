/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    
    // General thoughts:
    // Hash map to track the values, as we iterate through we can check the hash map and add to an existing key/value or make a new key/value
    // Iterate through the strs arr
    // We could potentially sort each str and save that to the hashmap then just check if it's there
    // We could also maybe use a .includes?
    /*
    {
    
    aet: [eat, tea]
    
    }
    
    */
    
    // Object.values(hashmap) 
    
    // Pseudo Code:
    
    // Declare a hashmap
    // For loop: to iterate through the strs arr
    // At each index sort the str
    // Conditional, if sorted str is in the hashmap
        // Push index into hashmap value arr
    // Else, 
        // Create an entry in the hashmap
    
    // Grab the values of the arr and return
    
    
    
    // Input: strs = ["eat","tea","tan","ate","nat","bat"]
    
    // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    
    
    let hashMap = {} // {"aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"], "abt": ["bat"]}
    
    for (let i = 0; i < strs.length; i++) { // i = 6 < 6
        
        let strArr = strs[i].split("")
        
        let sortedArr = strArr.sort()
        
        // console.log('hashMap', hashMap)
        let sortedStr = sortedArr.join("")
        
        
        
        if (!hashMap[sortedStr]) {
            hashMap[sortedStr] = [strs[i]]
        } else {
            hashMap[sortedStr].push(strs[i])
        }
        
        // console.log('hashMap', hashMap)
        
        
    }
    
    return Object.values(hashMap) // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]


};