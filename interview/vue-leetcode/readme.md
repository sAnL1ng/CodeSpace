- 位运算 & | 遵守了 && || 的含义，可以在二进制层面运算，性能更好
- 聊vue patch过程的时候要聊到位运算 
    有更新
    old new 
    DOM的更新是在浏览器的渲染层
    JS数据的更新是在V8 引擎主线程
    ref.a = 1
    ref.b = 2
    新旧两个对象对比
    patch 一次收集所有需要的更新(patchs ——补丁数组)，通知浏览器更新
let num1 = 10; // 1010
let num2 = 5; // 0101
- 位运算符
let result = num1 & num2;
console.log(result);

n   n 
O(n^2)
节点之间还要比对属性，文本等等...O(n^3)

[a,b,c,d]   [a,b,c,d]   [a,c,d]   [c,b,a]