export function myNextTick(fn) {
    let app = document.getElementById('app');
    var observerOptions = {
        childList: true, // 观察目标子节点的变化，是否有添加或者删除
        attributes: true, // 观察属性变动
        subtree: true, // 观察后代节点，默认为 false
    };
    // 让fn()在DOM更新完成之后执行 -> MutationObserver
    // 创建一个DOM监听器 
    let observer = new MutationObserver((el) => {
        // 当被监听的DOM节点更新完成时，该回调函数会触发
        console.log(el);
        fn();
    });
    observer.observe(app,observerOptions); // 监听上某个DOM节点及子节点
}