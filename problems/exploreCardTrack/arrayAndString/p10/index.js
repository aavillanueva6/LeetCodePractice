// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let i = 0,
    j = s.length - 1,
    temp = '';
  while (i < j) {
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    i++;
    j--;
  }
  return s;

  // solution with built in function
  // this exercise was meant to use two pointers, so I did not use built in array method
  /*
  return s.reverse();
  */
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); //["o","l","l","e","h"]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); //["h","a","n","n","a","H"]
