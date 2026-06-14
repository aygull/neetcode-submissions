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
     * @param {TreeNode} root
     * @return {boolean}
     */
    height(root) {
       if (root == null) {
            return 0;
        }
        let leftTree = this.height(root.left);
        if (leftTree === -1) {
            return leftTree;
        }
        let rightTree = this.height(root.right);
        if (rightTree === -1) {
            return rightTree;
        }
        if (Math.abs(leftTree - rightTree) > 1) {
            return - 1;
        }
        return 1 + Math.max(leftTree, rightTree);
    }
    isBalanced(root) {
        if (root == null) {
            return true;
        }
        return this.height(root) !== -1;
    }
}
