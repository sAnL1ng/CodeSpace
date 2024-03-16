function Car(name) {
    this.name = name

    // return [] // 如果是原始类型不产生影响，否则会影响new创建实例对象的结果
}

// let car2 = new Car('Tom')

function myNew(...args) {
    let obj = {}
    obj.__proto__ = args[0].prototype
    const res = args[0].call(obj,...args.slice(1))
    return res instanceof Object ? res : obj
}

let car = myNew(Car,'BMW',1,2)
console.log(car);