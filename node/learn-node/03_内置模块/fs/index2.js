const fs = require('fs')

// fs.writeFileSync('./target.md','落霞与孤鹜齐飞')

const img = fs.readFileSync('./avatar.jpg')  // 默认编码格式为buffer
fs.writeFileSync('./pic/avatar.jpg',img)

// console.log(Buffer.isBuffer(img)); // true
// console.log(img.length); //76788

// console.log(img);