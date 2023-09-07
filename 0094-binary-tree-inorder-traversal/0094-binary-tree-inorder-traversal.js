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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    
    // L, M, R
    // base case, if no root return 
    // recursively call left
    // recursively call right
    // return merged arr of all values
    
    if (!root) {
        return []
    }
    
    let left = inorderTraversal(root.left)
    let right = inorderTraversal(root.right)
    
    return [...left, root.val, ...right]
    
    
    
};