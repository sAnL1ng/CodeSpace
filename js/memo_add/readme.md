# 企业级开发

- 代码的健壮性
    校验一下参数
    进程的安全性
    单线程  简单 + event loop 太脆了
    throw + try catch()

- cache 自由变量 key 设置
    1 + 12  11 + 2  =>   '1,12' '11,2'
    - arguments 是一个伪数组  但是兼容性不好 
    1. [...arguments].join('')
    2. Array.from(arguments)

    Object.prototype.toString
    Array.prototype.join.call(arguments) 借
    [1,2,3].join(',') //this 指向数组

- fibonacci 爬楼梯问题
    - 递归的通用问题，不停的入栈
        自顶向下  CEO思想  递归的不停的入栈
    - 记忆函数 备忘录
    - 自底向上
        f(1) = 1   f(2) = 1   f(3) = f(1) + f(2)
        f(n) = f(n-1) + f(n-2)

- 使用递归，快速的，基于自顶向下的思想解决问题
    - 程序栈的问题 40%
- 可以先使用memorize 备忘录模式来进行优化
    空间{} key:value 来换时间
- 可以用递归解决的问题都可以自底向上解决，每一步其实都依赖一个公式f(n) = f(n-1) + f(n-2)  这就叫做动态规划 dp 
    for 循环 （自底向上） 88%
- 99.9% 
    空间再优化  不需要数组 ， 我们只要最后的结果
    [a,b] = [b,a+b]