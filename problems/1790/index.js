/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;
  let s1Map = new Map();
  let s2Map = new Map();
  let offCount = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) offCount++;
    if (offCount === 3) return false;
    if (!s1Map.has(s1[i])) s1Map.set(s1[i], 1);
    else s1Map.set(s1[i], s1Map.get(s1[i]) + 1);
    if (!s2Map.has(s2[i])) s2Map.set(s2[i], 1);
    else s2Map.set(s2[i], s2Map.get(s2[i]) + 1);
  }
  let response = true;
  s1Map.forEach((value, key) => {
    if (s1Map.get(key) !== s2Map.get(key)) response = false;
  });
  return response;
};

console.log(areAlmostEqual('bank', 'kanb')); //true
console.log(areAlmostEqual('attack', 'defend')); //false
console.log(areAlmostEqual('kelb', 'kelb')); //true
console.log(areAlmostEqual('ac', 'aa')); //false
