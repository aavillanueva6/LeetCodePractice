/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let ans = [];
  if (!root) return ans;
  function depthFirstSearch(treeNode) {
    ans.push(treeNode.val);
    for (let i = 0; i < treeNode.children.length; i++) {
      depthFirstSearch(treeNode.children[i]);
    }
  }
  depthFirstSearch(root);
  return ans;
};

// provided function to define a Node
function Node(val, children) {
  this.val = val;
  this.children = children;
}

// I haven't spent the time to programatically create the tree, so hardcoded in the TCs
let TC1Tree = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        { val: 5, children: [] },
        { val: 6, children: [] },
      ],
    },
    { val: 2, children: [] },
    { val: 4, children: [] },
  ],
};

let TC2Tree = {
  val: 1,
  children: [
    { val: 2, children: [] },
    {
      val: 3,
      children: [
        { val: 6, children: [] },
        {
          val: 7,
          children: [{ val: 11, children: [{ val: 14, children: [] }] }],
        },
      ],
    },
    { val: 4, children: [{ val: 8, children: [{ val: 12, children: [] }] }] },
    {
      val: 5,
      children: [
        { val: 9, children: [{ val: 13, children: [] }] },
        { val: 10, children: [] },
      ],
    },
  ],
};

console.log(preorder(TC1Tree)); //[1,3,5,6,2,4]
console.log(preorder(TC2Tree)); //[1,2,3,6,7,11,14,4,8,12,5,9,13,10]
