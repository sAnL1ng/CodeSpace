Parent.prototype.getName = function() {
    return this.name
}

function Parent(name) {
    this.name = name
}
Child.prototype = Object.create(Parent.prototype)  // 原型链继承
Child.prototype.constructor = Child
function Child(name) {
    Parent.call(this,name) // 构造函数继承
    this.age = 18
}

let c1 = new Child('Tom')

console.log(c1.getName());