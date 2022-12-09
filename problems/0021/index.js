// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // refactored solution to use ListNode / be able to run on LeetCode
  let merged = new ListNode(0, null);
  let temp = merged;
  while (list1 || list2) {
    if (!list1) {
      temp.next = list2;
      break;
    } else if (!list2) {
      temp.next = list1;
      break;
    } else if (list1.val < list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }
  return merged.next;

  // solution using arrays (for testing outside of leetcode)
  /*
  let ans = [];
  while (list1.length > 0 || list2.length > 0) {
    if (!list1[0]) {
      ans.push(list2[0]);
      list2.shift();
    } else if (!list2[0]) {
      ans.push(list1[0]);
      list1.shift();
    } else if (list1[0] <= list2[0]) {
      ans.push(list1[0]);
      list1.shift();
    } else {
      ans.push(list2[0]);
      list2.shift();
    }
  }
  return ans;
  */
};

// code to call using array version of algo
/*
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); //[1,1,2,3,4,4]
console.log(mergeTwoLists([], [])); //[]
console.log(mergeTwoLists([], [0])); //[0]
*/

// code to build linked list and call the function using the linked list version of the algo
function buildListNode(arr) {
  let list = new ListNode(0, null);
  let temp = list;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    let newNode = new ListNode(val, null);
    temp.next = { val: val, next: null };

    temp = temp.next;
  }
  return list.next;
}

function callTestCase(t1, t2) {
  let l1 = buildListNode(t1);
  let l2 = buildListNode(t2);
  let returnedList = mergeTwoLists(l1, l2);
  let arrayifiedAns = [];
  while (returnedList) {
    arrayifiedAns.push(returnedList.val);
    returnedList = returnedList.next;
  }
  console.log(arrayifiedAns);
}

callTestCase([1, 2, 4], [1, 3, 4]);
callTestCase([], []);
callTestCase([], [0]);
