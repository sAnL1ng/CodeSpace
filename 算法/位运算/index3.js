const num1 = 5 // 101
const num2 = 3 // 011

const res = num1 ^ num2
console.log(res); // 110 -> 6

const num3 = 5 // 101 
const num4 = 7 // 111

function swap(a,b){
    a = a^b
    b = a^b
    a = a^b
    return[a,b] // [7,5]
}

console.log(swap(num3, num4));

