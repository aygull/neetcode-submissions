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
     * @return {number}
     */
    constructor() {
        this.maxlenVar = 0;
    }
    maxLen(root) {
        if (root == null) {
            return 0;
        }
        let leftRoot = this.maxLen(root.left);
        let rightRoot = this.maxLen(root.right);

        this.maxlenVar = Math.max(this.maxlenVar, leftRoot + rightRoot);
        return 1 + Math.max(leftRoot, rightRoot);
    }
    diameterOfBinaryTree(root) {
        this.maxLen(root);
        return this.maxlenVar;
    }
}
