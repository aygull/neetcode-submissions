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
        nums.forEach((item, i) => {
            diff = target - item;
            if (obj[diff] >=0 ) {
                res.push(i, obj[diff]);
            }
            else {
                obj[item] = i;
            }
        })

        return res.sort();
    }
}
