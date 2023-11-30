// fs 读取文件
// promise + then / asycn + await 解决方案
const fs = require('fs');
function readFileByPromise(data) {
    return new Promise((resolve, reject) => {
        fs.readFile(data,'utf-8',(err, data) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(data);
            resolve()
        })
    })
    //     new Promise((resolve, reject) =>{
    //         fs.readFile('./a.txt','utf-8',(err,data1) => {
    //             if (err) {
    //                 console.log(err);
    //                 return
    //             }
    //             console.log(data1);
    //             resolve()
    //         })
    //     })
    //     .then(() => {
    //         fs.readFile('./b.txt','utf-8',(err,data2) => {
    //             if (err) {
    //                 console.log(err);
    //                 return
    //             }
    //             console.log(data2);
    //         })
    //     })
    //     .then(() => {
    //         fs.readFile('./b.txt','utf-8',(err,data3) => {
    //             if (err) {
    //                 console.log(err);
    //                 return
    //             }
    //             console.log(data3);
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
}

(async function () {
    try {
        const f1 = await readFileByPromise('./a.txt')
        const f2 = await readFileByPromise('./b.txt')
        const f3 = await readFileByPromise('./c.txt')
        console.log(f1, f2, f3);
    }catch(e){

    }
})()

