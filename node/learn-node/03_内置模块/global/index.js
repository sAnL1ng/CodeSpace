// console.log(globalThis === global);
// global.userInfo = {
//   name: 'Tom',
//   age: 18
// }
// console.log(Object.getOwnPropertyNames(global));



// __filename    __dirname
// console.log(__filename);
// console.log(__dirname);


// process

// console.log(process.argv);
// console.log(process.cwd());
// console.log(process.env);
// console.log(process.pid);
// console.log(process.platform);  // 读取操作系统
// console.log(process.arch);  // 读取cpu

// process.stdout.write('hello') // 写入数据流
// process.stdout.write(' ')
// process.stdout.write('world')
// process.stdout.write('\n')
// process.stdout.write('ok')

process.stdout.write('Are you sure you want to?')
process.stdin.on('data', (data) => {  // 读取输入的数据流
  console.log(`用户输入了: ${data}`);
})



