const fs  = require('fs')

// const info = fs.readdirSync('./test') //读取目录下所有文件的文件名
// console.log(info);

// fs.mkdirSync('./test-dir/data/list',{ recursive: true }) // 第一个参数创建文件夹 第二个参数代表可以多层级创建
// fs.rmdirSync('./test-dir',{ recursive: true }) // 第一个参数删除文件夹 第二个参数代表可以多层级删除

fs.watch('./',{ recursive: true }, (eventType,filename) => {
    console.log(`当前文件夹下${filename}文件${eventType}`);
})