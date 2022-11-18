/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let temp = head;
  let length = 0;
  let mid = head;
  while (temp) {
    temp = temp.next;
    length++;
  }
  for (let i = 0; i < Math.floor(length / 2); i++) {
    mid = mid.next;
  }
  return mid;
};

console.log(middleNode([1, 2, 3, 4, 5])); //[3,4,5]
console.log(middleNode([1, 2, 3, 4, 5, 6])); //[4,5,6]
