/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let ans = 0;
  if (low % 2 !== 0) {
    ans++;
    low++;
  }
  if (high % 2 !== 0) {
    ans++;
    high--;
  }
  ans += (high - low) / 2;
  return ans;
};

console.log(countOdds(3, 7)); //3
console.log(countOdds(8, 10)); //1
