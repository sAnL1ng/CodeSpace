function multiply(x,y){
    let result = 0
    while(y > 0){
        if(y & 1){
            result += x
        }
        x = x << 1
        y = y >> 1
    }
    return result
}

console.log(multiply(5,4));