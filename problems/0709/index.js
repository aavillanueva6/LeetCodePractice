/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  // return s.toLowerCase(); // using built in string method is trivial.  Algo below
  let lowered = '';
  let code;
  for (let i = 0; i < s.length; i++) {
    code = s.charCodeAt(i);
    if (code < 97) {
      lowered += String.fromCharCode(code + 32);
    } else {
      lowered += String.fromCharCode(code);
    }
  }
  return lowered;
};

console.log(toLowerCase('Hello')); //"hello"
console.log(toLowerCase('here')); //"here"
console.log(toLowerCase('LOVELY')); //"lovely"
