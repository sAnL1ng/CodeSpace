//动态规划
function fibonacci(n){
    let a = 1,b =1
    for(let i = 2;i < n; i++){
        [a,b] = [b,a+b]
    }
    return b
}

console.log(fibonacci(10));