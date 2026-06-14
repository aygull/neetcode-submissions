class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let cache = [];
        if (n == 2) return 2;
        if (n == 1) return 1;
        if (n < 1) return 0;
        return this.climbStairs(n-1) + this.climbStairs(n-2);
    }
}
