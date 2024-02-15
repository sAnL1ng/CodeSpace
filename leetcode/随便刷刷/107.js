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
var levelOrderBottom = function(root) {
    if(!root)return [];
    let queue=[root];
    let res=[];
    let level=0;
    while(queue.length){
      let temp=[];
      res[level]=[];
      for(let i=0;i<queue.length;i++){
        res[level].push(queue[i].val);
        if(queue[i].left){
          temp.push(queue[i].left);
        }
        if(queue[i].right){
          temp.push(queue[i].right);
        }
      }
      queue=temp;
      ++level;
    }
    return res.reverse();
  };
  
  