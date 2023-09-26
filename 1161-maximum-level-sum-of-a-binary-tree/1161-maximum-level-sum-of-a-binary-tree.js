/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    
    // We are finding the sum of vals at each level then returning the max sum
    // I think we'll have some sort of helper function to traverse the tree and calculate the sums and then an outer function to return the largest sum?
    // Could use object to track levels/sums possibly?
    // Bredth first search, which would involve a que
    
    // Pseudo Code:
    
    // Define a variable to hold the largest val
    
    let largestVal = -Infinity
    // Define a variable to hold the level
    let largestLevel = 1
    // Define a variable to track the current level
    let currentLevel = 1
    
    // establish a que and place the root into the que
    let q = [[root]]
    // while, the que is not empty
    while (q.length) {
        
        let currLevel = q.shift()
        let tempLevel = []
        let tempVal = 0
        
        for (let i = 0; i < currLevel.length; i++) {
            tempVal += currLevel[i].val
            
            if (currLevel[i].left) {
                tempLevel.push(currLevel[i].left)
            }
            if (currLevel[i].right) {
                tempLevel.push(currLevel[i].right)
            }
             
        }
        
        if (tempLevel.length > 0) {
            q.push(tempLevel)
        } 
        
        if (tempVal > largestVal) {
            largestVal = tempVal
            largestLevel = currentLevel
        }
        
        currentLevel++
    }
    
    return largestLevel
    // save the front val of the que to a variable with unshift
    // loop to iterate over dequed val and check if val has children
    // temp variable to hold current sum
    // if so , push vals into arr
    // add each val to sum
    
    // after loop completes push arr into que
    // 
    
    
    // return the level with highest sum
    
};