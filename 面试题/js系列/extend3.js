Parent.prototype.getName = function() {
    return this.name
}

function Parent(name) {
    this.name = name
}
Child.prototype = new Parent()
Child.prototype.constructor = Child
function Child(name) {
    Parent.call(this,name) // this.name = 'Tom'
    this.age = 18
}

let c1 = new Child('Tom')

console.log(c1.getName());