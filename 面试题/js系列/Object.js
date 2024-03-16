let obj = {
    name: 'Tom',
    age: 18,
    like:[1,2]
}

let obj2 = Object.create(obj)
obj2.like.push(3)

console.log(obj2.like);

let obj3 = Object.create(obj)
console.log(obj3.like);
