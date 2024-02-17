function recursion(node, res, index) {
    // 如果当前节点不存在，则退出递归
    if (!node) {
      return;
    }
    // 将节点的值，按照当前层的index存入结果
    res[index] ? res[index].push(node.val) : (res[index] = [node.val]);
    // 计算下一层的index
    let newIndex = index + 1;
    // 遍历子节点，并传入下一层的index
    for (let i = 0; i < node.children.length; i++) {
      recursion(node.children[i], res, newIndex);
    }
  }
  
  var levelOrder = function (root) {
    let result = []; // 储存结果
    // 递归遍历所有节点
    recursion(root, result, 0);
    return result;
  };