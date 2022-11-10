var reverseString = function (s) {
  // return s.reverse();// built in array method for this problem. below is my solution without using the Array.reverse() method

  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      // if statement not really needed.  I added it to see if it would speed up execution by reducing the number of writes.  it actually ended up having a slightly longer runtime on leetcode, but less memory.
      let tempVal = s[i];
      s[i] = s[j];
      s[j] = tempVal;
    }
  }
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); //["o","l","l","e","h"]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); //["h","a","n","n","a","H"]
