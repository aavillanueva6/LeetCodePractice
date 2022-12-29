/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0,
    cows = 0;
  let secretMap = new Map();
  let guessMap = new Map();
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      if (!secretMap.has(secret[i])) {
        secretMap.set(secret[i], 1);
      } else {
        secretMap.set(secret[i], secretMap.get(secret[i]) + 1);
      }
      if (!guessMap.has(guess[i])) {
        guessMap.set(guess[i], 1);
      } else {
        guessMap.set(guess[i], guessMap.get(guess[i]) + 1);
      }
    }
  }
  secretMap.forEach((sVal, key) => {
    if (guessMap.has(key)) {
      let gVal = guessMap.get(key);
      cows += Math.min(sVal, gVal);
    }
  });
  return `${bulls}A${cows}B`;
};

console.log(getHint('1807', '7810')); //"1A3B"
console.log(getHint('1123', '0111')); //"1A3B"
