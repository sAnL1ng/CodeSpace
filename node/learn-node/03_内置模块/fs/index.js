// 文件系统
// const fs = require('fs');

// 同步
// const syncData = fs.readFileSync('./data.txt', 'UTF-8');
// console.log(syncData);

// 异步
// fs.readFile('./data.txt', { encoding: 'UTF-8' }, (err, res) => {
//     if (!err) {
//         console.log(res);
//     }
// });

// fs.promises.readFile('./data.txt', 'base64', 'utf-8')
//     .then(res => {
//         console.log(res);
//     })

const fs = require('fs/promises')

fs.readFile('./data.txt', 'utf-8')
    .then(res => {
        console.log(res);
    })
