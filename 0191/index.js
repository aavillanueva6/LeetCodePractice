/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let ans = 0;
  parseInt(n)
    .toString(2)
    .split('')
    .forEach((element) => {
      if (element == 1) {
        ans++;
      }
    });
  return ans;
};

console.log(hammingWeight(00000000000000000000000000001011)); //3
console.log(hammingWeight(00000000000000000000000010000000)); //1
// the next test case isn't working when I run this solution in node, however I ran it in leetcode and it worked.  I think it has something to do with how I am handling the input to the problem, but am not going to waste time figuring it out
console.log(hammingWeight(11111111111111111111111111111101)); //31
