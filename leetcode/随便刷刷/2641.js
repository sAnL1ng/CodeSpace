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
 * @return {TreeNode}
 */
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
 * @return {TreeNode}
 */

var replaceValueInTree = function(root) {
    const q = [[root, new TreeNode(-1)]]; // Array<node, father>
    while (q.length) {
      let size = q.length;
      let total = 0;
      let map = new Map();
      let temp = [];
      while (size > 0) {
        size -= 1;
        const [node, fa] = q.shift();
        if (!node) return ;
        total += node.val; // 计算层级总节点和
        temp.push([node, fa]);
        map.set(fa, (map.get(fa) || 0) + node.val); // 记录父节点的下层子和
        if (node.left) q.push([node.left, node]);
        if (node.right) q.push([node.right, node]);
      }
      // 更新：堂兄弟和 = 层级和 - 此节点的父节点的下层子和
      for (const [node, fa] of temp) {
        if (!map.has(fa)) {
          node.val = 0;
        } else {
          node.val = total - map.get(fa);
        }
      }
    }
    return root;
  };
  