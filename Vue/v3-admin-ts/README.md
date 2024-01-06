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

## vue 考题
- <component :is="comName" />
    循环或动态输出组件
- <temlplate />
    slot 
    不会显示 到页面上 接收指令 不添加标签

## 项目亮点
    - 带有权限校验的菜单
      - 菜单
         el-menu>el-sub-menu>el-menu-item 
      - 当前选中的菜单
         :default-active="route.path"
      - 哪些菜单可以看到？
         指令？ 自定义指令 
         store -> permiss -> roleList user includes ?
         添加一个数据key 任何地方都可以调用
         setKeys action
         localStorage 读取
    - 自定义指令
        app.directives(name)
        v-name 
        mounted(el,binding)
        el['hidden'] = true
        el.style.opacity = 0 v-show 

## 项目难点
    - 多组件状态的共享和设计 
      - vuex 和 pinia
        1. 用 pinia vuex modules  很灵活 加一个defineStore 
        没有vuex的树状约束 ·我们只需要执行函数就可以拿到hook 
        语法很简洁
        2. 学 vuex 设计模式 state mutation action getter 安全 
      - 学习过一些项目 github 开源 vue-music vue-admin ...
      - 因为当我在多个组件，特别是兄弟或跨页面级别组件，有共享状态需求的时候，我封装了一个store函数。
        原来使用 ref + props + emits 
        现在换成了 store   