# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:

        loop1 = loop2 = head
        count1 = 0

        while loop1:
            count1 += 1
            loop1 = loop1.next

        if count1 == 1 and n == 1:
            return None

        position = count1 - n

        count2 = 0
        prev_node = loop2

        if count2 == position:
            head = head.next
            return head

        while count2 != position:
            count2 += 1
            prev_node = loop2
            loop2 = loop2.next

        prev_node.next = loop2.next

        return head
