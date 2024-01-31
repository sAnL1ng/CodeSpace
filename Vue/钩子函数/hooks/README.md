# 路由的钩子函数
- 全局守卫
1. router.beforeEach
2. router.beforeResolve
3. router.afterEach

- 独享守卫
可以在单独的路由配置中定义
eg:在特殊的页面进行token判断是否授权

- 组件内的守卫
1. onBeforeRouteUpdate （当两个页面共用同一个组件）
2. onBeforeRouteLeave (离开页面之前触发)

# keep-alive
包裹需要缓存的组件
1. onActivated 当被缓存的组件再次生效时触发
2. onDeactivated 当组件被缓存起来的时候触发

