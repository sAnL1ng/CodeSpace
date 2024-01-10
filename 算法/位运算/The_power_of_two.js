const num = 15

function test(num){
    return (num & num-1) == 0
}

console.log(test(num));