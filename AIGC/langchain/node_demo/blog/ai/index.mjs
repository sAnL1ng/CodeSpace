// js 早期的js 没有模块化的概念  文件的加载顺序靠手动处理
// <script src="./a.js" defer></script> script会形成阻塞 加dfer可以避免阻塞
// <script src="./b.js"></script>
// <script src="./c.js"></script>

// node commonjs
//     js ? 语言 -> 编译成二进制 -> v8引擎 chrominum 内核 不包含浏览器UI（用户交互页面）

//     node的底层：用c++ 封装了chrominum  js运行时的环境 commonJS require module.exports

//     为什么需要在commonjs中加上require module.exports？
//     因为后端天生复杂
//     前端应用随着VUE/React 也变得复杂起来 但是commonjs没有满足前端模块化的需求 ESModule 就应运而生了
//     难道 node 用commonjs 前端用ESModule吗？ node 也支持 ESModule
//     mjs? node 安装新的版本，可能 直接支持 ESModule ，如果老一点的版本
//     用.mjs 后缀来声明 一定支持ESModule 不然会报错
