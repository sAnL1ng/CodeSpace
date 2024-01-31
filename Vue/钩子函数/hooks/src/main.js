import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 全局的前置钩子
// router.beforeEach((to, from, next) => {
//     // console.log(to,from);
//     if (to.path !== '/') {
//         const isLogin = localStorage.getItem('isLogin')
//         if (!isLogin) {
//             router.push('/')
//             alert('Please login')
//             return
//         } else {
//             next()
//         }
//     }
//     next()
//     document.title = to.meta.title;
// })


const app = createApp(App)

app
    .use(router)
    .mount('#app')


