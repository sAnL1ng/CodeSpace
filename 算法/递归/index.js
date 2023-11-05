function mul(n){ //mul 就是可以计算阶乘
    //n! = n * (n - 1)!
    if(n == 1){
        return 1
    }
    return n * mul(n - 1)

}

console.log(mul(5));