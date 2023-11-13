// let str = 'Hello'   // String
// let num = 123       // Number
// let flag = false    // Boolean
// let un = undefined  //Undefined
// let nu = null       // null 
// let big = 123n      //BigInt
// let s = Symbol('hello') //Symbol 



// instanceof 判断引用类型
// let obj = {}
// let arr = []
// let fn = function(){}
// let date = new Date() 

// console.log(obj instanceof Object);
// console.log(arr instanceof Array);// arr.__protp__.__proto__ === Object.prototype
// console.log(fn instanceof Function);
// console.log(date instanceof Date);

function test(obj){
    if(obj instanceof Object){
        return obj.name
    }
}
console.log(test({name:"君君"}))
console.log(test(['Hello']))