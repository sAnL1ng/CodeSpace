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
 * @return {number[]}
 */
var preorderTraversal = function(root) {

    // 遍历方法
    // let arr =[]
    // function help(node){
    //     if(!node) return []
    //     arr.push(node.val);
    //     help(node.left) 
    //     help(node.right)
    // }
    // help(root);
    // return arr

    // 迭代方法
    if(!root) return []
    const res = []
    const stack = []
    stack.push(root)
    while(stack.length){
        const top = stack.pop()
        res.push(top.val)
        if(top.right){
            stack.push(top.right)
        }
        if(top.left){
            stack.push(top.left)
        }
    }

    return res 
};