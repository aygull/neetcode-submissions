class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTarget(nums, target, l, r) {
        if (l <= r) {
            let mid = Math.floor(l + (r - l)/2);
            let item = nums[mid];
            if (item === target) {
                return mid;
            }
            else if(item > target) {
                return this.findTarget(nums, target, l, mid - 1);
            }
            return this.findTarget(nums, target, mid + 1, r);
            
        }
        return -1;
    }
    /* `` рекурсивный метод `` */
    search(nums, target) {
        return this.findTarget(nums, target, 0, nums.length);
    }
    /* `` итеративный метод ``
        
    search(nums, target) {
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
    */
}
