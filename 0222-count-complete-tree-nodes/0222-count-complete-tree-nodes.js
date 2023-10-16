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
var countNodes = function(root) {
    
    // probably use depth first search to traverse tree & recursion
    // base case would be null node val, return 0
    // recursively call left branch + 1 and right branch + 1
    // add left + right + 1 for the root node?
    
    
    if (!root) {
        return 0
    }
    
    let count = 0
    
    const treeTravel = (val) => {
        
        if (val) {
            count++
        }
        
        if (val.left) treeTravel(val.left)
        if (val.right) treeTravel(val.right)
        
        
    }
    
    treeTravel(root)
    
    return count
    
//     if (!root) {
//         return 0
//     }
    
//     let left = countNodes(root.left) + 1
//     let right = countNodes(root.right) + 1
    
//     return left + right / 2
    
    
};