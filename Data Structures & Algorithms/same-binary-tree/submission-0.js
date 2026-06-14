/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    constructor() {
        this.isBalancedTree = true;
    }
    traverseTree(p, q) {
        if (p == null && q == null) {
            return true;
        }
        if ((p == null && q !== null) || (p !== null && q == null)
        || p.val !== q.val) {
            this.isBalancedTree = false;
            return false;
        }
        this.traverseTree(p.left, q.left);
        this.traverseTree(p.right, q.right);
    }
    isSameTree(p, q) {
        this.traverseTree(p, q);
        return this.isBalancedTree;
    }
}
