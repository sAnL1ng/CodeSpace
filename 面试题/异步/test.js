// function foo() {
//     return new Promise (function (resolve, reject) {
//         resolve('123')
//     })
// }

// Promise.resolve(foo()).then(res => {
//     console.log(res); // 123
// })

function a() {
    return new Promise((resolve, reject) => {
        resolve()
    })
}

a()
    .then(() => {
        console.log(111111);
    })
    .then(() => {
        console.log(222222);
    })