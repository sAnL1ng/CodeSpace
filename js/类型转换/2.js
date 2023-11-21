// 对象转Number

console.log(Number({})); // NaN
console.log(Number([])); // 0

//转字符串 toString() 不同数据类型处理方式不同

let a = {}
console.log(a.toString()); // '[object Object]'

let arr = [1,2,3]
console.log(arr.toString());// '1,2,3'

let date = new Date()
console.log(date.toString());

// toString()不适用于 `undefined`和`null` 直接报错
// let un = undefined
// console.log(un.toString());
// let nu = null
// console.log(nu.toString());
//转数字 valueOf()

let sy = Symbol(123)
console.log(sy.toString());
