class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    constructor() {
        this.cache = [];
    }

    dfs(cost, i, n) {
        if (i >= n) {
            return 0;
        }
        if (this.cache[i]) return this.cache[i];
        this.cache[i] = cost[i] + Math.min(this.dfs(cost, i + 1, n),  this.dfs(cost, i + 2, n));
        return this.cache[i];
    }

    minCostClimbingStairs(cost) {
        let resultFromZero = 0;
        resultFromZero = this.dfs(cost, 0, cost.length);
        let resultFromOne = 0;
        this.cache = [];
        resultFromOne += this.dfs(cost, 1, cost.length);
        return Math.min(resultFromZero, resultFromOne);
    }
}
