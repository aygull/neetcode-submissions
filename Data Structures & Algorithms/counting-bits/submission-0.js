class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [];
        for (let i = 0; i <= n; i++) {
            res.push(i.toString(2).split('').filter(item => item === '1').length);
        }
        return res;
    }
}
