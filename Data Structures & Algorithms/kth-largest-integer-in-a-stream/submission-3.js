class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.nums = nums;
        this.priorityQueue = new MinPriorityQueue();
        for (const num of nums){
            this.priorityQueue.enqueue(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */

    add(val) {
        this.priorityQueue.enqueue(val);
        while (this.priorityQueue.size() > this.k) {
            this.priorityQueue.dequeue();
        }
        return this.priorityQueue.front();
        // this.nums.push(val);
        // this.nums.sort((a, b) => b - a);
        // return this.nums[this.k - 1];
    }
}
