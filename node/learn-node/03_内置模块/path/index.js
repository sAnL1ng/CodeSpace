const path = require('path')

console.log(path.join('a','b','c')); // a\b\c
console.log(path.join(process.cwd(),'model','index'));  // d:\workspace\node\learn-node\model\index

console.log(path.resolve('a','b','c')); // d:\workspace\node\learn-node\a\b\c

console.log(path.dirname(process.cwd())); // d:\workspace\node 返回路径的目录名
console.log(path.dirname('/a/b/c')); // /a/b 返回路径的目录名

console.log(path.basename('a/b/c.js')); // c.js
console.log(path.basename(__filename)); // index.js

console.log(path.extname(__filename)); // .js 文件的后缀名

console.log(path.normalize("\a\\b\c")); // \a\b\c.js 格式化路径
console.log(path.normalize(__filename)); // d:\workspace\node\learn-node\03_内置模块\path\index.js 将路径格式化成标准的路径

console.log(path.parse(__filename)); // 解析该文件

console.log(path.sep); // 打印出 \
console.log('foo\\bar\\baz'.split(path.sep)); // [ 'foo', 'bar', 'baz' ] \\代表转义