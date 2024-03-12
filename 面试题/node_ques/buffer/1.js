// common js 模块化系统
const game = require('./game.js')

var winCount = 0;

// process是node内置的进程对象，document
// 在命令行有输入的时候 事件
process.stdin.on('data', (buffer) => {
    // console.log(buffer);
    var action = buffer.toString().trim()
    // console.log(action);
    const result = game(action)

    if (result == 1) {
        winCount++
        if(winCount == 3) {
            console.log('我不玩了！');
        }
        process.exit();
    }
})