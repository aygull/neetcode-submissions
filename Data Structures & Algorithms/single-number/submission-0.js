class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
     let i = 0;
     let res = 0;
     while(i < nums.length) {
        res^=nums[i];
        i++;
     }
     return res;
    }
}
