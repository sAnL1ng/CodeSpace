# 一、js为什么要有异步？
因为js是单线程的编程语言，同一时间只能执行一个任务。

# 二、js为什么不设计成多线程？
1. 节约内存
2. 没有锁，解锁的过程，节约上下文切换的时间

# 三、请你聊一聊异步的发展史(ES6)
- 是什么？
 js中从最早的异步处理方式到现在的最新的异步处理方式

- 发展史
1. 回调函数:代码维护困难（回调地狱）
2. promise:
    1. 维护了一个状态，status,值为：pedding fulfilled rejected,目的是让promise的状态一经改变，无法再次修改，也就保证了
    then 和 catch 不可能同时触发。 
    2. 内部的resolve函数会修改state为fulfilled,并触发then中的回调
    3. then:
        1. 默认返回一个promise对象，状态为fulfilled
        2. 当then前面的promise状态为fulfilled，then里面的回调直接执行
           当then前面的promise状态为rejected，then里面第二个回调直接执行
           当then前面的promise状态为pending，then里面的回调需要被缓存起来交给resolve或者reject执行

3. Generator
   1. 可以分段执行，可以暂停
   2. 可以控制每个阶段的返回值
   3. 可以知道是否执行完毕

4. async/await
   1. es6提供的一种新的处理异步的方案 
   2. 没有错误捕获机制 
   3. async/await 是由 promise结合generator实现的，本质是在generator基础上通过递归的方式
      来自动执行一个又一个的next函数，当done为true时，结束递归。  