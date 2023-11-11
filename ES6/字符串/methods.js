// let str = 'abcdefg'
// console.log(str[2]);
// console.log(str.at(2));

// console.log(str.startsWith('ab'));
// console.log(str.endsWith('defg'));\

// console.log(str.padStart(20,'*'));

let obj = {
    a:1,
    b:2
}
// console.log(obj);
let str = JSON.stringify(obj); //对象转字符串
console.log(str);
console.log(JSON.parse(str)); //字符串转为对象
