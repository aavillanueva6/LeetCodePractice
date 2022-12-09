//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let reversed = new ListNode(0, null);
  let temp = reversed;
  let listArr = [];
  while (head) {
    listArr.push(head.val);
    head = head.next;
  }
  for (let i = listArr.length - 1; i >= 0; i--) {
    let val = listArr[i];
    temp.next = { val: val, next: null };
    temp = temp.next;
  }
  return reversed.next;
};

// code to build linked list and call the function using the linked list version of the algo
function buildListNode(arr) {
  let list = new ListNode(0, null);
  let temp = list;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    temp.next = { val: val, next: null };
    temp = temp.next;
  }
  return list.next;
}

function callTestCase(t1) {
  let l1 = buildListNode(t1);
  let returnedList = reverseList(l1);
  let arrayifiedAns = [];
  while (returnedList) {
    arrayifiedAns.push(returnedList.val);
    returnedList = returnedList.next;
  }
  console.log(arrayifiedAns);
}

callTestCase([1, 2, 3, 4, 5]); //[5,4,3,2,1]
callTestCase([1, 2]); //[2,1]
callTestCase([]); //[]
