// .all

function a(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        console.log('a');
        reject('no');
    }, 1000)
})
}

function b(){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('b');
        resolve('yes');
    }, 1500)

})
}

function c(){
    setTimeout(() => {
        console.log('c');
    }, 500);
}

// Promise.all([a(),b()]).then(c)
// all 必须要接收到的所有的promise状态都为resolve,then才会调用

// a()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

Promise.race([a(),b()]) //优化代码
.then(c)
.catch((err) => {
    console.log(err);
})
