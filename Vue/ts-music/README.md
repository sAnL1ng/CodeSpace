# typescript 

- 让前端像写JAVA一样写大型项目 代码 一万行+
- 顶级大厂的前端技能栈： vue/react + `typescript` 
- es6
   弱类型这个缺陷还没有弥补，弱点就是很容易出问题
   let banners:[int] = [1,2,3]
- typescript 是JS 的超集
- 给项目引入前端模型层
   - 路由已经不是后端独有，前端也可以有
   - 前端也可以有自己的模型 ， MVVM

- UI组件和数据管理的分离
   - store / components|views
   - pinia definStore('todos', () => {
      return {
            state,
            actions...
      }
   }) useTodosStore
   - vue ref
   - 这里是唯一请求axios 接口的地方
   - app.use(createPinia()) 
   - 引入这个模块,执行useTodosStore 方法
const { todos } = toRefs(useTodosStore())
const { getTodos } = useTodosStore()

- vue 项目开发设计模式
   - 越复杂的,只要是流程,其实很简单,只不过需要一本说明书
   - UI 组件 + 数据管理
   - 数据的流向
      backend -> api -> store -> component 
   - SPA
      router -> views -> components
   - APP = VUE + VueRouter + pinia + ts
   - 写UI组件
      element-plus(熟) + views + components(common|components) +
      Tailwindscss(熟) + 组件设计艺术

- App.vue 一个个组件慢慢搭
   <>defineProps
   - 不要用ts