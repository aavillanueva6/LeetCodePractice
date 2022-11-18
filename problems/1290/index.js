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
  while (head) {
    binNum += head.val;
    head = head.next;
  }
  return parseInt(binNum, 2);
};

console.log(getDecimalValue([1, 0, 1])); //5
console.log(getDecimalValue([0])); //0
