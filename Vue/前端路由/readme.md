# 路由
服务端用来描述路径的

前端借鉴路由的称呼，来描述 URL 和 组件 的映射关系 

# 实现路由需要解决的问题
1. 如何修改URL，还不引起页面的刷新
2. 如何知道URL变化了

# hash
在浏览器URL后拼接 #xxx 会被认为是hash值 而hash值的变更是不会引起浏览器页面的刷新的

修改url的方式：
1. a 标签
2. 浏览器的前进和后退
3. window.location

以上方式导致url变更都会触发hashchange事件


# history

MDN:History：pushState() 方法

history 提供了一个pushState方法可以修改URL且不引起页面刷新
        提供了一个popState事件，仅当浏览器前进后退时生效
