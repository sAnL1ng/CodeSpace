var obj ={
    a:1
}
function foo(a,b){
    console.log(this.a,a+b);
}

// foo.call(obj)
// let obj = {
//     fn:foo
// }
// obj.fn()
// delete obj.fn

Function.prototype.myCall = function(context){
    if(typeof this !== "function"){
        throw new TypeError('myCall is not a function');
    }

    let args = [...arguments].slice(1)  //Array.from(arguments).slice(1) 类数组可以被解构 可以直接将类数组解构放进一个新数组或者强转成数组

    context.fn=this
    let res = context.fn(...args) //触发this隐式绑定规则
    delete context.fn
    return res
}

foo.myCall(obj,2,3)