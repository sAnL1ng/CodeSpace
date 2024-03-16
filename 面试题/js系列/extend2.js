function Parent(name) {
    this.name = name
}

function Child(name) {
    Parent.call(this,name) // this.name = 'Tom'
    this.age = 18
}

const child = new Child('Tom')
const child2 = new Child('Jack')

console.log(child);
console.log(child2);