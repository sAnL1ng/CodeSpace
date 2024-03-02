var co = require('co')


function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a完成');
            resolve();
        }, 1000);
    })
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b完成');
            resolve();
        }, 500);
        
    })
}

function* g() {
    yield a()
    yield b()
}

co(g)

// function run(fn) {
//     const gen = fn()
//     function next({value,done}) {
//         if (result.done){
//             return Promise.resolve(value)
//         }

//         return Promise.resolve(value).then(val => next(gen.next(val)))
        
//     }

//     return next(gen.next())
// }

// run(g).then(() => {
//     console.log("执行完成");
// });


