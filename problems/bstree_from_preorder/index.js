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
  const root = new TreeNode(preorder[0]);
  let curr = root;
  let i = 1;

  while(i < preorder.length) {
    const newNode = new TreeNode(preorder[i])

    while (curr.val) {
      if (preorder[i] < curr.val) {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = newNode;
          break;
        }
      } else {
        if (curr.right) {
          curr = curr.right;
        } else {
          curr.right = newNode;
          break;
        }
      }
    }

    curr = root;
    i++;
  }

  return root;
};

export default bstFromPreorder
