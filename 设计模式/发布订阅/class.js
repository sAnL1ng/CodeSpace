// function PoinT(x,y){
//     this.x = x;
//     this.y = y;
// }
 
// PoinT.prototype.toString = function() {
//     return `(${this.x} ${this.y})`
// }
// PoinT.foo = function(){
//     return 'foo'
// }

// let pt = new PoinT(1,2);
// console.log(pt.toString());


// class Point {
//     constructor(x,y) {
//         this.x = x;
//         this.y = y;
//     }
//     get toString() { // 按mutation来理解 不用调用直接触发
//         return `(${this.x} ${this.y})`
//     }
//     static foo() { // 静态 按构造函数的显示属性理解 无法被实力对象调用
//         return 'foo'
//     }
// }

// let p = new Point(2,1);

// console.log(p.toString);


class Point {
    _count =  0;

    get value() {
        return this._count;
    }

    set value(val) {
        console.log(val,'----');
        this._count = val
    }
}

let p = new Point()
p.value = 1 // 1 ----
console.log(p.value); // 1