/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let merged = '';
  for (let i = 0; i < word1.length || i < word2.length; i++) {
    if (word1[i]) merged += word1[i];
    if (word2[i]) merged += word2[i];
  }
  return merged;
};

console.log(mergeAlternately('abc', 'pqr')); //"apbqcr"
console.log(mergeAlternately('abcd', 'pq')); //"apbqcd"
console.log(mergeAlternately('ab', 'pqrs')); //"apbqrs"
