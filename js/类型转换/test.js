// 引入
console.log([] == ![]);

// 步骤：
// 1. 先将对象![]转换成Boolean类型 结果为false
// 2. [] 和false 都转换成number 
// 3. 也就可以最终写成 '' ==  0
// 4. 0 == 0