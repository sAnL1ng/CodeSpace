function add(a,b,c){
    return a + b + c
}

//函数的科里化
function curry(fn){
    // 收集参数 用闭包 用数组arr存放参数
    // 到位了才运行 arr.length === fn.length fn(...arr)
    // 返回收集参数的函数
    // rest 运算符 args是数组 这个数组在闭包空间 闭包空间里的变量专业名词为自由变量
    // args
    let judge = (...args) => {
        // let a = 1
        if(args.length === fn.length) return fn(...args)
        // 返回函数，继续收集参数
        return (...arg) => judge(...args,...arg) 
    }
    return judge
}

// 有时候不会一次性给到
//  js curry 科里化
// 每次接受一个参数

// console.log(add.length); // 3
// add(1)(2)(3)
const curryAdd = curry(add)
curryAdd(1)(2)(3)