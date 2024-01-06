import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import './assets/css/main.css'
import './assets/css/color-dark.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 将所有图标组件放入ElementPlusIconsVue

const app = createApp(App);
// {a:1,b:2} -> [[a:1] [b:2]]

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app
    .use(createPinia())
    .use(router)
    .mount('#app')