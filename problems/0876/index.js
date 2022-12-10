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

//refactored algo (55 ms, 41.8 MB)
var middleNode = function (head) {
  let temp = head;
  let mid = head;
  while (temp) {
    temp = temp.next;
    if (temp) {
      temp = temp.next;
      mid = mid.next;
    }
  }
  return mid;
};

// // original algo (85 ms, 42.5 MB)
// var middleNode = function (head) {
//   let temp = head;
//   let length = 0;
//   let mid = head;
//   while (temp) {
//     temp = temp.next;
//     length++;
//   }
//   for (let i = 0; i < Math.floor(length / 2); i++) {
//     mid = mid.next;
//   }
//   return mid;
// };

// code to build linked list and call the function using the linked list version of the algo
// This is from LeetCode, copying below, as it is easier than remembering to uncomment it from the starter code for each algo that uses linked lists
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * builds a linked list using an array input
 * @param {array} arr
 * @returns linked list
 */
function buildLinkedList(arr) {
  let list = new ListNode(0, null);
  let temp = list;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    temp.next = { val: val, next: null };
    temp = temp.next;
  }
  return list.next;
}

/**
 * converts test parameters from arrays to linked lists, then calls algo on the parameters.
 * Logs the output of the algo as an array for easier readability during development.
 * @param {array} t1 - test parameter 1
 */
function callTestCase(t1) {
  let l1 = buildLinkedList(t1);
  let returnedList = middleNode(l1);
  let arrayifiedAns = [];
  while (returnedList) {
    arrayifiedAns.push(returnedList.val);
    returnedList = returnedList.next;
  }
  console.log(arrayifiedAns);
}

callTestCase([1, 2, 3, 4, 5]); //[3,4,5]
callTestCase([1, 2, 3, 4, 5, 6]); //[4,5,6]
