/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let arr1 = [];
  let arr2 = [];
  while (l1 || l2) {
    if (l1) {
      arr1.push(l1.val);
      l1 = l1.next;
    }
    if (l2) {
      arr2.push(l2.val);
      l2 = l2.next;
    }
  }

  let carry = false;
  let addedNumArr = [];
  let addedNum = 0;
  for (let i = 0, j = 0; i < arr1.length || j < arr2.length; i++, j++) {
    if (i < arr1.length && j < arr2.length) {
      addedNum = arr1[i] + arr2[j];
    } else if (i < arr1.length) {
      addedNum = arr1[i];
    } else {
      addedNum = arr2[j];
    }
    if (carry === true) {
      addedNum += 1;
      carry = false;
    }
    if (addedNum >= 10) {
      addedNum -= 10;
      carry = true;
    }
    addedNumArr.push(addedNum);
    addedNum = 0;
  }
  if (carry === true) addedNumArr.push(1);
  let ans = new ListNode(0, null);
  let temp = ans;
  for (let i = 0; i < addedNumArr.length; i++) {
    temp.next = { val: addedNumArr[i], next: null };
    temp = temp.next;
  }
  return ans.next;
};

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
 * @param {array} t2 - test parameter 2
 */
function callTestCase(t1, t2) {
  let l1 = buildLinkedList(t1);
  let l2 = buildLinkedList(t2);
  let returnedList = addTwoNumbers(l1, l2);
  let arrayifiedAns = [];
  while (returnedList) {
    arrayifiedAns.push(returnedList.val);
    returnedList = returnedList.next;
  }
  console.log(arrayifiedAns);
}

callTestCase([2, 4, 3], [5, 6, 4]); //[7,0,8]
callTestCase([0], [0]); //[0]
callTestCase([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]); //[8,9,9,9,0,0,0,1]
callTestCase([2, 4, 9], [5, 6, 4, 9]); //[8,9,9,9,0,0,0,1]
