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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  var array = [];
  search(root, 1);

  function search(root, level) {
    if (root) {
      if (array.length < level) {
        array.push([]);
      }
      var arr = array[level - 1];
      arr.push(root.val);
      search(root.left, level + 1);
      search(root.right, level + 1);
    } else {
      return;
    }
  }

  return array;
};
