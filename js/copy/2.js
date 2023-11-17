// let a = {
//     name:'666',
//     like:{
//         n: 'coding'
//         }
// }
// let b = Object.create(a)//创建一个空对象并且继承a

// let c = Object.assign({},a)//将多个对象合并成一个
// a.like.n = 'running'
// console.log(c);

let arr = [1,2,3,{a:10}]
// let newArr = [].concat(arr)
// let newArr = arr.slice(0)
// let newArr = [...arr]
let newArr = arr.toReversed().reverse()
arr[3].a=100
console.log(newArr);