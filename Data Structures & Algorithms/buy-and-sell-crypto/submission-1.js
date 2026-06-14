class Solution {
    maxProfit(prices) {
     if (prices.length === 1) return 0;
     let min = prices[0], profit = 0, max = prices[0];
     for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min && i + 1 < prices.length) {
            min = prices[i];
            max = prices[i+1];
        }
        else if (prices[i] > max) {
            max = prices[i];
        }
        if (max - min > profit) {
            profit = max - min;
        }
     }
     return profit;
    }
}
