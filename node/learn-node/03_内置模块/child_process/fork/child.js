process.on('message', (msg) => {
  console.log(`来自父进程的消息：${msg}`);
  process.send('Hello from child')
})