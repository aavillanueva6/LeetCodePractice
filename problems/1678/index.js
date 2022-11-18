/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let ans = '';
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') ans += 'G';
    else if (command[i + 1] === ')') {
      ans += 'o';
      i++;
    } else {
      ans += 'al';
      i += 3;
    }
  }
  return ans;
};

console.log(interpret('G()(al)')); //"Goal"
console.log(interpret('G()()()()(al)')); //"Gooooal"
console.log(interpret('(al)G(al)()()G')); //"alGalooG"
