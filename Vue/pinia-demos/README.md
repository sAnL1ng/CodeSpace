# vue3 全家桶 MVVM

- vue 响应式组件开发
    - components(分类)
        1. common(通用组件)
        2. 业务组件
    - views

    - UI组件库 element-plus

    - view-router
        让前端也拥有了路由
        SPA（单页应用） 
        特点：快 
        快在不需要做传统的 http request+response （页面请求响应来完成页面渲染）
        页面不会白一下（刷新）
        缺点：SEO （搜索引擎优化）
- vuex/pinia     就像一家公司的财务
    作用:让前端可以管理数据
    提问：问什么要这么做？
    - 确保数据流的正确性
        数据在组件里叫什么？ `状态`
    - 将数据与组件剥离开， UI组件更单纯

- vue 项目中 数据从后端到页面显示经过的所有流程和关键环节。
    eg:todolist 数据显示到页面的流程
    数据库:mysql/mongondb db/todos table
    sql 查询语句
    java/node 内存 `MVC`
    `后端router`  
    `res`
    `http`协议 通过GET方法请求 :3000/todos 
        然后来到`axios` axios由http.js封装 getTodoList
        直接存储到`store` `actions` -> `mutations` -> `state`
        组件 `views`做数据请求 然后通过`props`传给子组件 
            这样做可以确保子组件`UI`化
        UI Component + State + Router = SPA
        UI Component + State = APP　

- pinia?
    - 更简单 
        只需要在store目录下新建/todo.js 就可以得到一个数据管理函数 defineStore 返回值命名 useTodoStore 
        函数返回 state
        import { useTodoStore } from './stroe/todo.js'
        const { todos } = useTodoStore()
    - 更现代
        用的是现在最流行的 hooks 编程 其标志是：user 开头
    - 将数据和UI组件分离开 让组件更加干净