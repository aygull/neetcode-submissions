class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        if (stones.length < 2) {
            return stones[0]
        }
        const queue = new MaxPriorityQueue();
        for (const num of stones){
            queue.enqueue(num);
        }
        while (queue.size() > 1) {
            const number1 = queue.dequeue();
            const number2 = queue.dequeue();
            queue.enqueue(Math.abs(number1-number2));
        }
        return queue.front();
    }
}
