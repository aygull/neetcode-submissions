class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {};
        let diff;
        let res = [];
        let i = 0;

        while (!res.length) {
            diff = target - nums[i];
            if (obj[diff] >=0 ) {
                res.push(i, obj[diff]);
            }
            else {
                obj[nums[i]] = i;
            }
            i++;
        }

        return res.sort();
    }
}
