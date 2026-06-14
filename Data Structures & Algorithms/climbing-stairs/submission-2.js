class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    constructor() {
        this.cache = [0, 1, 2];
    }

    climbStairs(n) {
        if (this.cache[n]) return this.cache[n];
        this.cache[n] = this.climbStairs(n-1) + this.climbStairs(n-2);
        return this.cache[n];
    }
}
