/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let binNum = '';
  // while loop needed to step through linked list in leetcode
  while (head) {
    binNum += head.val;
    head = head.next;
  }
  // below is the for loop that executes the same function, but in a way that works for an array.
  // for (let i = 0; i < head.length; i++) {
  //   binNum += head[i].toString();
  // }
  return parseInt(binNum, 2);
};

console.log(getDecimalValue([1, 0, 1])); //5
console.log(getDecimalValue([0])); //0
