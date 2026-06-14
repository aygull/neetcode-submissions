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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let res = new ListNode();
        let curr = res;
        let l1 = list1;
        let l2 = list2;
        if (!list1) {
            return l2;
        }
        if (!list2) {
            return l1;
        }

        while (l1 && l2) {
            if (l1.val > l2.val) {
                curr.next = l2;
                l2 = l2.next;
            }
            else {
                curr.next = l1; 
                l1 = l1.next;
            }
            curr = curr.next;
        }
        if (l1 != null) {
            curr.next = l1;
        }
        if (l2 != null) {
            curr.next = l2;
        }
        return res.next;
    }
}
