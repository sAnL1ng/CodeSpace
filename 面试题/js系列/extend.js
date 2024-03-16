function Parent() {
    this.name = 'Tom'
    this.like = [1, 2]
    this.girlfriend = {
        n: 1
    }
}

Child.prototype = new Parent()
function Child(age) {
    this.age = age
}

let child1 = new Child()
let child2 = new Child()

// child1.name = 'Jerry'        // no
// child1.like.push(3)          // yes
// child1.girlfriend.n = 2      // yes
// child1.girlfriend = { n : 2} // no

console.log(child1.girlfriend.n);   // Jerry
// console.log(child2.name);   // Tom