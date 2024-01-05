const path = require('path')

// console.log(path.join('a', 'b', 'c'));
// console.log(path.join(process.cwd(), 'model', 'index'));

// console.log(path.resolve('a', 'b', 'c'));

// console.log(path.dirname(process.cwd())); // 返回路径的目录名
// console.log(path.dirname('/a/b/c')); // 返回路径的目录名

// console.log(path.basename('/a/b/c.js'));
// console.log(path.basename(__filename, '.js'));

// console.log(path.extname(__filename));

// console.log(path.normalize(__filename)); // 将路径格式化成标准的路径

// console.log(path.parse(__filename));

console.log('foo/bar/baz'.split(path.sep));