/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // faster O(n) TC solution.  125 ms
  let minPrice = 100000; // constraints list 10000 as max possible price.  Initialized variable at value beyond constraints
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    else if (prices[i] - minPrice > max) max = prices[i] - minPrice;
  }
  return max;
  /*
  // original O(n^2) TC.  7487 ms
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
  */
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
console.log(maxProfit([7, 6, 4, 3, 1])); //0
