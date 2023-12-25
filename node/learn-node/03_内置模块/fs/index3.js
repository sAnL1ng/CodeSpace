const fs = require('fs');

console.log(fs.statSync('./target.md')); // 返回一个对象 描述该文件的信息

const info1 = fs.statSync('./target.md')
const info2 = fs.statSync('./pic')

console.log(info1.isFile()); // true 判定是否为文件
console.log(info2.isDirectory()); // true 判定是否为文件夹