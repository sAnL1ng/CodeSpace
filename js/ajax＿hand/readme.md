# 手写封装ajax函数  ，只考虑get url,思考 同步和异步

- promise
    ajax是异步，    放到promise里面？async await
    1. Promise 实例化，经历以下流程
        - new 该做的 创建一个实例p 初始状态 statement = 'pedding'
        - constructor  会将executor 执行
        这两步都是同步 只不过
        - executor（执行器） 是异步任务的容器 但是它本身是同步的
            executor同步 ， 里面的宏任务（setTimeout/ajax/...）是异步的 =》 进入到Event Loop
            resolve()时，会将 p.state pending -> fullfilled
        - 进入到EventLoop 怎么办 流程？
            - then 微任务 执行的机会是在 p.state pending -> fullfilled
            - await  比 then  更简洁，更像同步代码，resolve(data) data交给左边
