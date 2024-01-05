const fork = require('child_process').fork;

const child = fork('child.js')  // 创建子进程

child.on('message', (msg) => { // 监听子进程传输过来的信息
  console.log(`来自子进程的消息：${msg}`);
})

child.send('Hello from parent') // 向子进程发送一条信息