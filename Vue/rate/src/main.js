// main.js 入口文件
import { createApp } from 'vue'
// 根组件 组件开发是vue开发的基本单元
import App from './App.vue'

// 原生js不支持Vue编程 需要Vue挂载到JS上  DOM编程低效率  #app vue开创新世界 这个世界是一个mvvm的世界
// web app
createApp(App).mount('#app')
