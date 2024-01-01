function add(a, b, c) {
    return a + b + c
}

function curry(fn) {
    let judge = (...args) => {
        if (args.length === fn.length) return fn(...args)
        return (...arg) => judge(...args, ...arg)
    }
    return judge
}

const curryAdd = curry(add)
console.log(curryAdd(1)(2)(3)); // 6