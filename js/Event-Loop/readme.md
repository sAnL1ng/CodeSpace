# 线程 vs 进程


- 进程：CPU运行指令和保存上下文所需要的时间

- 线程：进程中的更小的单位描述了一段指令执行所需的时间



## 浏览器新开一个tab页面 就是新开一个进程
需要多个线程配合才能完成页面的展示
1. 渲染线程(GPU)
2. HTTP请求线程
3. JS引擎线程

渲染线程(GPU) 和 JS引擎线程 是互斥的

# JS 单线程
优点：
1. 节省内存
2. 单线程没有🔒（LOCK）的概念，节省上下文切换的时间


# 异步
- 宏任务    (macrotask) : 
script标签 
setTimeout
setInterval
setImmediate 
I/O
UI-rendering

- 微任务    (microtask)
promise.then()
MutationObserver()
Process.nextTick()

# event-loop JS事件循环
1. 执行同步代码（这属于宏任务）：
2. 当执行栈为空，去查询是否有异步代码需要执行
3. 执行微任务
4. 如果有需要，会渲染页面
5. 执行宏任务（这也叫下一轮的event-loop的开启）

面试官：微任务一定比宏任务先执行？
错 比如JS引擎读到<script></script>标签时就开启了第一轮宏任务，这个时候宏任务就比微任务先执行。