class MyPromise {
    constructor(executor) {
        this.status = 'pending' // promise的初状态
        this.value = undefined // 接受resolve的参数
        this.reason = undefined // 接受reject的参数
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = (value) => {
            if(this.status === 'pending') {
                this.status = 'fulfilled'
                this.value = value
                // 把then里面的回调函数触发掉
                this.onFulfilledCallbacks.forEach(cb => cb(value))
            }
        }

        const reject = (reason) => {
            if(this.status === 'pending') {
                this.status = 'rejected'
                this.reason = reason
                this.onRejectedCallbacks.forEach(cb => cb(reason))
            }
        }

        executor(resolve,reject)
    }
    then(onFulfilled,onRejected) {
        // 把 onFulfilled 存起来，供resolve调用
        
    }
}

let p = new MyPromise((resolve,reject) => {
    resolve('1')
})



console.log(p);

// MyPromise.prototype.then = function () {}
// function MyPromise(executor) {
//     function resolve() {
        
//     }

//     function reject() {
        
//     }

//     executor(resolve,reject)
// }