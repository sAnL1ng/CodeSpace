let a = 13.7
let b =1101

console.log(parseInt(a)); // 13
console.log(parseInt(b,2)); // 13

const arr = [1,2,3]
const newArr = arr.map(parseInt) 
console.log(newArr); // [1, NaN, NaN]