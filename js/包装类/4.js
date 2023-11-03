//构造函数
// function Person(name,age,sex){
//     this.name = name;
//     this.age = age;
//     this.sex = sex;


//     //  new执行过程
//     // let this = {
//     //     name:name,
//     //     age:age,
//     //     sex:sex
//     // }
//     return this
// }


function Person(name, age){
    var that = {}
    that.name = name;
    that.age = age;
    return that
}

let p1 = Person('程总',18)
let p2 = Person('梓帆',19)

console.log(p1);
console.log(p2);