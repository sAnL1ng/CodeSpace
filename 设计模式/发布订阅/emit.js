class EventEmitter {
    constructor() {
        this.event = {} // 'run':[fn] , 'say':[fn]
    }
    on(type, cb) { // 添加订阅事件与对应回调函数的记录
        if (!this.event[type]) {
            this.event[type] = [cb]
        } else {
            this.event[type].push(cb)
        }
    }
    once(type, cb) { // 添加订阅一次事件 在事件触发后取消订阅
        const fn = (...args) => {
            cb(...args)
            this.off(type, fn)
        }
        this.on(type, fn)
    }
    emit(type, ...args) { // 负责调用事件对应的回调函数
        if (!this.event[type]) {
            return
        } else {
            this.event[type].forEach(cb => {
                cb(...args)
            })
        }
    }
    off(type,cb) {
        if (!this.event[type]) {
            return
        }else {
            this.event[type] = this.event[type].filter(item => item !== cb) // 过滤掉 cb 并以新的数组形式返回
        }
    }
}

let ev = new EventEmitter();

const fn1 = (...args) => {
    console.log(...args,'有人调用了fn1');
}
const fn2 = (...args) => {
    console.log(...args,'有人调用了fn2');
}
const fn3 = (...args) => {
    console.log(...args,'有人调用了fn3');
}

ev.on('run', fn1) // 订阅 run 事件 并且执行fn1函数
ev.once('run', fn2) // 只订阅一次 run 事件 并且执行fn2函数

// ev.on('run', fn3)
// ev.off('run',fn3) // 取消订阅run事件

// ev.emit('run', 'sAnL1ng') // 发布 run 事件并且携带参数 'abc'
ev.emit('run', '这是第一次派发事件')
ev.emit('run', '这是第二次派发事件')
ev.emit('run', '这是第三次派发事件')
