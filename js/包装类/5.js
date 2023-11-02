// 包装类

// let obj = {}
// console.log(obj.a);

// var num = 123
// num.abc = 'hello'
// console.log(num.abc);

// var num = new Number(123)
// num.abc = 'hello'
// console.log(num.abc);
// console.log(num * 2); //参与运算时会变成数字


// var str = 'abcd'
// console.log(str.length);

// var num = 4
// num.len = 3

// var num = new Number(4)
// num.len = 3
// delete num.len

// new Number.len  //隐式包装类
// console.log(num.len);

// 考点
// var arr = [1, 2, 3, 4, 5]
// arr.length = 2
// console.log(arr);

// var str = 'abcd'
//str.length = 2
// new String(str).length = 2 //delete
// console.log(str.length); 

//面试题
var str = 'abc'
str += 1
var test = typeof(str)
if(test.length == 6){
    test.sign = 'typeOf的返回结果可能为String'
}
console.log(test.sign);
