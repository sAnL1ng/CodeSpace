function foo() {
    return new Promise (function (resolve, reject) {
        resolve('123')
    })
}

Promise.resolve(foo()).then(res => {
    console.log(res); // 123
})