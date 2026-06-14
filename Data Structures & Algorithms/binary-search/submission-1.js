class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // let l = 0, r = Math.floor(nums.length / 2);
        // let mid = nums[r];
        // while (l >= 0 && i > 0) {
        //     if (nums[i] === target) {
        //         return i;
        //     }
        //     if (nums[i] > target) {
        //         i--;
        //     }
        //     else {
        //         i++;
        //     }
        // }
        return nums.indexOf(target);
    }
}
