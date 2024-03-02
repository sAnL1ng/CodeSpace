class MyPromise {
    constructor(executor) {
        this.status = 'pending' // promise的初状态
        this.value = undefined // 接受resolve的参数
        this.reason = undefined // 接受reject的参数
        this.onFulfilledCallbacks = [] // 供.then调用的回调函数
        this.onRejectedCallbacks = [] // 供.then第二个参数或者.catch调用的回调函数

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
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

        // 返回一个promise对象
        const newPromise = new MyPromise((resolve,reject) => {
            if(this.status === 'fulfilled') { // then前面的promise对象状态是同步变更完成了
                setTimeout(() => { // 官方是微任务，我们用宏任务简化一下
                    try {
                        const result = onFulfilled(this.value)   
                        resolve(result) // 应该放result里面resolve中的的参数
                    }catch(err) {
                        reject(err)
                    }
                });
            }
            if(this.status === 'rejected') {
                setTimeout(() => {
                    try {
                        const result = onRejected(this.reason)
                        resolve(result)
                    }catch(err) {
                        reject(err)
                    }
                });
            }
            if(this.status === 'pending') { // 缓存then中的回调
                this.onFulfilledCallbacks.push((value) => {
                    setTimeout(() => { // 保障将来onFulfilled在resolve中被调用时是一个异步函数
                        try {
                            const result = onFulfilled(value)
                            resolve(result)
                        }catch(err) {
                            reject(err)
                        }
                    });
                })

                this.onRejectedCallbacks.push((reason) => {
                    setTimeout(() => { // 保障将来onFulfilled在resolve中被调用时是一个异步函数
                        try {
                            const result = onFulfilled(reason)
                            resolve(result)
                        }catch(err) {
                            reject(err)
                        }
                    });
                })
            }
        })

        return newPromise
    }

    static race(promises) {
        return new MyPromise((resolve,reject) => {
            // 看promises里面的哪一个对象状态最快变成fulfilled或者rejected
            const arr = Array.from(promises)
            arr.forEach((promise) => {
                promise.then((value) => {
                    resolve(value)
                }, (reason) => {
                    reject(reason)
                })
            })
        })
    }

    static all(promises){
        return new MyPromise((resolve,reject)=>{
            let count = 0;
            let arr = []
            for(let i=0 ; i< promises.length ; i++){
                promises[i].then(
                    (value)=>{
                        count++
                        arr[i]=value
                        if(count === promises.length){
                            resolve(arr)
                        }
                    },
                    (reason)=>{
                        reject(reason)
                    }
                )
            }
        })
    }

    static any(promises){
        return new MyPromise((resolve,reject)=>{
            let count = 0,errors = []
            for(let i=0 ; i< promises.length ; i++){
                promises[i].then(
                    (value)=>{
                        resolve(value)
                    },
                    (reason)=>{
                        count++
                        errors[i] = reason
                        if(count === promises.length){
                            reject(new AggregateError(errors))
                        }
                    }
                )
            }
        })
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