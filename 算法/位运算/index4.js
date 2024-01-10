const num = 5 // 0000000....000101
const res = ~num //111111....111010

console.log(res); // 111111....111010 -> -6

//  0000000....000110
//  111111....111001 + 1    -6的二进制补码
//  111111....111010 （-6） 

function reverseBit(str) {
    const n = parseInt(str,2)
    return ~n
}

const binaryStr = '00001101' // 13
const reverseStr = reverseBit(binaryStr)
console.log(reverseStr) 
