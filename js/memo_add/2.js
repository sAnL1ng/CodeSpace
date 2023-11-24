const memorized = require('./memo.js')
var count = 0

var fibonacci = function(n){
    count++
    return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
}
const memorizedFibonacci = memorized(fibonacci)

console.time("fibonacci")
memorizedFibonacci(20)
console.log(count);
console.timeEnd("fibonacci")