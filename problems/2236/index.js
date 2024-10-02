/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function (root) {
  return root.val === root.left.val + root.right.val ? true : false;
};

let root = {
  val: 10,
  left: { val: 4 },
  right: { val: 6 },
};
console.log(checkTree(root)); //true

root = {
  val: 5,
  left: { val: 3 },
  right: { val: 1 },
};
console.log(checkTree(root)); //false
