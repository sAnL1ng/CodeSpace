- 何为Typescript?
    JavaScript 的超集
- 如何使用ts?
    - 像js一样来写
    - 加点啥？
        - 类型检测
            你在乎的地方 -> 数据  


## 项目亮点
- 使用了ElementPlus 作为UI开发框架
    - 登录注册页 表单
        - 表单的目的是收集数据, :model="" 双向绑定
            每一个el-input v-model=".username"  
        - 表单的校验做好
            - 自动聚焦
            - @keyup.enter 
        - ref 属性 DOM 标记
            - const login = ref();  // null
            - mouted <form ref="login">
        - 表单提交
            - validate  

- 为什么element-plus 要搞得这么复杂？
    - 按需加载
        图标库有点大，如果用户使用了别的图标，可以省空间
    -  其他的选择
    -  单独安装图标库
       app.component()  全局挂载一下 用到哪几个就挂载哪几个

## ts 
- 写JS就好， 再做点加法
- 最关心的数据
    - ref
    - reactive
    - props
    - store
- 函数的参数