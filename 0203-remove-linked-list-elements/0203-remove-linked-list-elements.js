/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
     if (!head) {
            return head
        }
   
    
    
    while (head.val === val) { // null === 6

        
        head = head.next // new head starting point
        
        if (!head) {
            return head
        }
        
    }
    
    let currHead = head.next // null
    let prevNode = head // 5
    
    
    while (currHead) { // null
        
        
        if (currHead.val === val) { // 6 === 6
            
            prevNode.next = currHead.next // null
            currHead = prevNode.next // null

        } else {
            
            prevNode = currHead
            currHead = currHead.next
            
        }
        
    }
    
    return head // 1 -> 2 -> 3 -> 4 -> 5
    


    
};