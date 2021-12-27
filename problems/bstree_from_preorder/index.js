// 题目来源 https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  const [left, right] = splitVals(preorder);
  const rootNode = new TreeNode(preorder[0]);

  if (left.length) {
    rootNode.left = bstFromPreorder(left);
  }

  if (right.length) {
    rootNode.right = bstFromPreorder(right);
  }

  return rootNode;
};

// 找到左子树和右子树分别包含哪些值
function splitVals(arr) {
  let i = 1;
  let j = 1;
  let left = [];
  let right = [];
  const root = arr[0];

  while (j < arr.length) {
    if (arr[j] >= root) break;
    j += 1;
  }

  left = arr.slice(i, j);
  right = arr.slice(j)

  return [left, right]
}

// export default bstFromPreorder

console.log(bstFromPreorder([8,5,1,7,10,12]))
