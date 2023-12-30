// console.log(globalThis === global); //true
// global.userInfo = {
//     name:'Tom',
//     age:'18',
// }
// console.log(Object.getOwnPropertyNames(global));

// __filename  __dirname  全局变量

// console.log(__filename);
// console.log(__dirname);

// process

// console.log(process.argv);
// console.log(process.cwd());
// console.log(process.env); //用于区分开发环境
// console.log(process.pid); //进程ID
// console.log(process.platform); //用node 来读取操作系统
// console.log(process.arch); //用node 来读取cpu

// process.stdout.write('hello'); 
// process.stdout.write(' '); 
// process.stdout.write('world'); 
// process.stdout.write('\n');
// process.stdout.write('ok!');  

process.stdout.write('Are you sure you want to do it?[n/Y]'); 
process.stdin.on('data',(data) => {
    console.log(`用户输入了：${data}`);
})
