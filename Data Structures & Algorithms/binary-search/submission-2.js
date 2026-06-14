class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;
        while (l <= r) {
            let mid = Math.floor(l + (r - l)/2);
            let item = nums[mid];
            if (item === target) {
                return mid;
            }
            else if(item > target) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        return -1;
    }
}
