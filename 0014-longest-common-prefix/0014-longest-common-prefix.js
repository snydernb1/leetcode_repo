/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if (strs.length === 1) {
        return strs[0]
    }
    
    
    let prefix = strs[0]
    let temp = ''

    for (let i = 1; i < strs.length; i++) {
        let j = 0
        
        
        if (prefix.length === 0 || strs[i].length === 0) {
            return ''
        } else {
            while (prefix[j] === strs[i][j] && prefix.length !== temp.length) {
                temp += prefix[j]    
                j++
            }
        }

        

        prefix = temp
        temp = ''
        

        
    }


    return prefix
    
};