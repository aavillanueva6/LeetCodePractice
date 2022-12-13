/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let lastI = -2;
  for (let i = 0; i < prices.length - 1; i++) {
    if (i > 0 && prices[i] >= prices[i - 1]) continue;
    else if (lastI === i - 1) {
      max += prices[lastI] - prices[i];
      lastI = i;
      continue;
    }
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > max) {
        max = prices[j] - prices[i];
        lastI = i;
      }
    }
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
console.log(maxProfit([7, 6, 4, 3, 1])); //0
