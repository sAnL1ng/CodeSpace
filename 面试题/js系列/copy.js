// let a = 1
// let b = a
// a = 2

// let a = {
//     age: 18,
//     like:[1,2]
// }
// a.like.push(3)
// a.age = 20
// // let b = Object.create(a) // 继承a 返回一个空对象
// let b = Object.assign({},a) // 浅拷贝 可以接受多个参数
// console.log(b)

// let a = [1,2,{n:3}]
// let b = [...a]
// let b = [].concat(a)
// let b = a.slice(0)
// a[2].n = 30



// let a = [1,2,{n:3}]
// let a = {
//     n: 1,
//     m: Symbol(2),
//     h: function () { },
//     g: undefined,
//     p: null,
//     // k :123n
//     k: {
//         e: 3
//     }
// }

// a.f = a.k
// a.k.e = a.f
// let b = JSON.parse(JSON.stringify(a))
// a[2].n = 30


// let b = structuredClone(a);

let a = function () {
    console.log('hello world');
}

function copy(fn) {
    let foo = fn.toString()

    // return eval(JSON.stringify(fn))
    // console.log(eval(JSON.stringify(fn)));
    // eval(JSON.stringify(fn))

    return new Function(`return ${foo}`).call(fn)
}

let foo = copy(a)
foo()