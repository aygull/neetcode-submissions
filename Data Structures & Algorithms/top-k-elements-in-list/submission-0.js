class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = {};

        for (let num of nums) {
            if (!res[num]){
                res[num] = 1;
            }
            else {
                res[num]++;
            }
        }

        return Object.entries(res).sort(([,a], [,b])=> b - a).slice(0, k).map(item => parseInt(item[0]));
    }
}
