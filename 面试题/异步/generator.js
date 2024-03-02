// function* foo () {
//     yield 'a'
//     yield 'b'
//     yield 'c'
//     return 'ending'
// }

// let gen = foo() // 得到一个Generator的实例对象

// console.log(gen.next()); // { value: 'a', done: false }
// console.log(gen.next()); // { value: 'b', done: false }
// console.log(gen.next()); // { value: 'c', done: false }
// console.log(gen.next()); // { value: 'ending', done: true }

function* g() {
    var o = 1
    yield o++
    yield 
    yield o++
}

let gen = g() // 迭代对象
console.log(gen.next()) // { value: 1, done: false }
console.log(gen.next()) // { value: undefined, done: false }
console.log(gen.next()) // { value: 2, done: false }
console.log(gen.next()) // { value: undefined, done: true }


// let gener = g()
// console.log(gener.next()); 