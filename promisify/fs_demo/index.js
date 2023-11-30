// node内置的模块化系统 commonJS
// fs 文件模块 内置的
const fs = require('fs')
// - 硬盘到内存
// - 文件大小 
fs.readFile('./a.txt', 'utf-8',((err, data) => {
    //后端 稳定性第一
    if (err) {
        console.log(err);
        return
    }
    //<Buffer e4 bd a0 e5 9b 9e e6 9d a5 e4 ba 86 e5 90 97 ef bc 9f>  Buffer 二进制流
    console.log(data);
    fs.readFile('./b.txt', 'utf-8',(err, data2) => {
        if(err){
            console.log(err);
            return 
        }
        console.log(data2);
        fs.readFile('./c.txt','utf-8',(err,data3) => {
            if(err){
                console.log(err);
                return 
            }
            console.log(data3);
        })
    })
}))