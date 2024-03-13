import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store/index'
// vue 保持自身的简单 use 其他工作交给生态中的插件
// mvvm 嫁接
// use
createApp(App)
.use(store)
.mount('#app')
