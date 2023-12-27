/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let buy = 0;
    let sell = 0;
    let maxProfit= -Infinity;

    while (sell < prices.length) {
        if (prices[sell] - prices[buy] > maxProfit) {
            maxProfit = prices[sell] - prices[buy];
            sell++;
        } else if (prices[sell] - prices[buy] < 0) {
            buy++;
        } else {
            sell++
        }
    }
    return maxProfit







    // let buy = prices[0];
    // let buyIndex = 0;
    // let sell = 0;

    // for (let i = 1; i < prices.length; i++) {
    //     if (buy > prices[i]) {
    //         buy = prices[i];
    //         buyIndex = i;
    //     }
    // } 

    // if (buyIndex === prices.length - 1) return 0

    // for (let j = buyIndex; j < prices.length; j++) {
    //     if (sell < prices[j]) {
    //         sell = prices[j]
    //     }
    // }

    // return (sell - buy)
    
};