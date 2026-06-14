class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    countSum(n) {
        let sum = 0;
        let arr = []
        n.toString().split('').forEach((item, index) => {
            arr[index] = parseInt(item);
            sum+= arr[index] * arr[index];
        });
        return sum;
    }
    isHappy(n) {
        let numbersSeen = new Set();
        n = this.countSum(n);
        while (n !== 1 && !numbersSeen.has(n)) {
            numbersSeen.add(n);
            n = this.countSum(n);
        }
        return n === 1;
    }
}
