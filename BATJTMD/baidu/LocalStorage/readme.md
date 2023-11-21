# 百度考点

- 前端考点
    - JS 语法
        小黄书
    - HTML5
        LocalStorage 前端持久化存储
        浏览器的能力提升
        BOM
    - DOM BOM
    - css3/less/tailwindcss
    - VUE/React 
    - Webpack 前端 工程化
    - node      大前端  后端的
    - ES6+

- localStorage
    html5 提供的持久化存储能力
    localStorage.getItem(KEY)
    localStorage.setItem(KEY,value)
    移除 localStorage.removeItem(KEY)

- HTML5表单能力
    - 提升用户体验
        如果用户在提交表单时，受挫，小白
        小白用户犯错能不能避免
        required
        placeholedr=""

- JSON.parse + JSON.stringify
    localStorage不能存对象， toString, 

- label  + input + 事件冒泡   用户体验优化
    label  for  = input 扩大操作范围， 特别是在移动端 
    事件监听只能在一个元素上，所以列表一定要做事件委托，
    我用冒泡机制 只监听父元素上的事件

- populateList 封装 很牛逼 
    Don't repeat yourself!
    const items = JSON.parse() || [] 