function dfs(node) {
    // 递归
    console.log(node.value);

    for (let child of node) {
        dfs(child);
    }
}