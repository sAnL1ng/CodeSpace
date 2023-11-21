//三种原始数据类型的转换

let num = 123
let str = 'hello world'
let sy = Symbol(123)
let un = undefined
let n = null

let big = 123n
let falg = Boolean

// Boolean的转换
// console.log(Boolean(false)); //false
// console.log(Boolean(0)); //false 除了 0 其他number都是true
// console.log(Boolean(undefined)); //false
// console.log(Boolean(null)); //false 
// console.log(Boolean('123')); // true
// console.log(Boolean('')); //false
// console.log(Boolean(' '));// true  

// Number的转换
// console.log(Number());// 0 什么都不传则为0 官方文档
// console.log(Number('123')); //123 如果字符串是数字则可以转
// console.log(Number('hello'));//NaN 它一种Number类型 因为Number方法无法对其转换 看ES5开发文档
// console.log(Number(undefined));//NaN 因为Number方法无法对其转换 
// console.log(Number(null)); //0
// console.log(Number('100a')); //NaN

// String的转换
// console.log(String()); // <empty string> 空字符串 不显示
// console.log(String(0)); //0
// console.log(String(NaN));// NaN
// console.log(String(Infinity));// Infinity
// console.log(String(undefined));// undefined
// console.log(String(true));// true

// Object的转换
// console.log(Object('123'));// = new String('123')
// console.log(Object(123));// = new Number(123)
// console.log(Object(undefined));// Object{}
// console.log(Object(null));// Object{}


