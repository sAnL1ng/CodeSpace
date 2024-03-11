## 蔚来面试

- base合肥 蔚来 内部系统开发
    周三入职 半个月 B站

### 一面
- 前端理解
- 怎么学习
- 项目上线
- CSS面经
- 登入注册 jwt cookie session

### 二面
聊天....

提前去思考这些问题，整理话术，互相模拟面试 
一面面试官是用人的，有1个hc的人
二面一般是一面的leader 一面反馈的帮把关 有决定权的

##　B站
- 时长
    70分钟 50-80分钟 
    `不用追问`  `自问自答`  
    拿下一面

- git命令 ***加强***
    git init .... git push  git clone 
    撤回提交 灵机一动
    branch 分支
    git rebase 变基

- == 与 === 区别

- Vue的响应式原理 ref reactive  深度 vue源码的学习
    - proxy(对象)
    - defineProperty(属性)
    - vue2/vue3 区别
        数组 增改
    - 追问，依赖收集
    - wathcer 
  
- 如何调试代码
    - 断点 逐步跟踪 ，显示变量的值
    - console.log
    - vue devtool 数据状态与界面
    - console.time console.timeEnd() 性能优化
    - 浏览器自带的性能面板
    - postman 模拟请求 测试接口 restful 
        restful——API风格 Method + url 定义 一切皆资源
        `GET` / post   列表页 读 /post/:id
        `POST` / post    写
        `DELETE`
        `PUT` /  `PATCH`  修改 
            PUT　文件上传修改头像　
            PATCH　部分修改　改字段　
        OPTIONS ....

- 状态码 ***深入***
    304 实现

- node stream 
    JAVA 二进制流

- vuex/pinia
    - 父子/兄弟组件通信之外 vuex/pinia 让状态再任何组件之间共享 
    - store 
        应用 = 状态储存 + UI组件    组件更专注于界面开发  
    - 购物车 / 登录
    - pinia 持久化储存
    - vuex 缺点 不太好理解  mutations
    - pinia hooks 函数化编程 灵活 对ts的支持更好

- 持久化
    localStorage + JSON.parse() JSON.stringify()

- JWT 
- 深度优先搜索 DFS BFS
- 面得怎么样
    学习建议
    机会很难得

- 为什么学习前端？
    小黄书 小红书 写文章 点赞 成就感 其实前后端都无所谓 互联网行业前几年不太好 今年在慢慢复苏
    AIGC 代码不重要 可以快速学习 我认为未来是AIGC的机会 所以选择任何方向不重要 但是通过AIGC把前后端底层搞深一点 为公司做出贡献很重要

    `AIGC` 快速学习 高效开发 代码助理 

- 生命周期  ***深入***
    图
    父子
    1. 父 实例化 created 
    2. 子 实例化 created
    3. 子 挂载 mounted
    4. 父 挂载 mounted

- 手写ts ***刷一点***
    :string[] type 区别
        :string[]

- 盒模型 布局

- 是否有环 双指针

总结： 
    TOP20的面试难度主要在于全面的基础能力 算法、VUE、基础、JS/css八股 情商 

- 树的遍历
    用递归的概念来定义一棵树
    先、中、后、序 根节点
    BFS DEF ? 迷宫问题 ? 

    想起那张图
    执行结果
    - 深度优先 适合递归
    -  