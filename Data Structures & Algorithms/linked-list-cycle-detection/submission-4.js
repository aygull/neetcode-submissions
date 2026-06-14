/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head || !head.next || !head.next.next) {
            return false;
        }
        let p1 = head;
        let p2 = head.next.next;
        while (p1 && p2) {
            if (p1.val === p2.val) {
                return true
            }
            p1 = p1.next;
            p2 = p2.next.next;
        }
        return false;
    }
}
