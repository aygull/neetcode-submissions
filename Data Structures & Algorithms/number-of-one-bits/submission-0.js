class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let ans = 0;
        for (let i = 31; i >= 0; i--) {
            if ((n & (1 << i)) !== 0) {
                ans += 1;
            };
        }

        return ans;
    }
}
