function request(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * 10);
        }, 1000);
    })
}

function* gen() {
    const num1 = yield request(1);
    const num2 = yield request(num1);
    const num3 = yield request(num2);
    return num3
}

// 模拟async
function generateToAsync(generatorFn) { // 把generaTorFn变更成具有async功能的函数

    return function () { //具有async功能的函数
        const gen = generatorFn()

        return new Promise((resolve, reject) => {

            function loop(key, arg) {
                let res = null
                res = gen[key](arg) // gen.next(arg) // {value:Promise {},done:false}
                const { value, done } = res
                if (done) {
                    return resolve(value)
                } else {
                    Promise.resolve(value) // 10 Promise.resolve()接受一个Promise对象为参数，会直接读取到该参数对象中的resolve的值
                           .then(val => loop('next', val))
                }
            }
            loop('next')

        })
    }
}

const asyncFn = generateToAsync(gen)
asyncFn().then(res => {
    console.log(res);
})

