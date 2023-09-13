/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    // Pseudo
    // Assign the head to a variable
    // Declare a variable for the next node
    // While loop: while there is a current node and next node?
    
    // if, node and next values are equal reassign node next to next next
    // else, move to the next node
    
    // return head
    
    // i = [1,1,1]
    // head = [1]
    
    if (!head) {
        return head
    }
    
    let node = head // 1
    let nextNode = node.next // null
    
    while (node && nextNode) {
        // console.log('node', node)
        // console.log('next', nextNode)
        
        if (node.val === nextNode.val) {
            node.next = nextNode.next
            nextNode = node.next
        } else {
            node = node.next
            nextNode = nextNode.next
        }
    }
    
    return head
    
};