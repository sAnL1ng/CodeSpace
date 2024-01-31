import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: '商城首页'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: {
            title: '关于商城'
        },
        // beforeEnter: (to, from, next) => { // 单独的路由守卫
        //     if(localStorage.getItem('isLogin')) {
        //         next(); 
        //     }else {
        //         alert('Please login')
        //         return 
        //     }
        // }
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})


// 全局的解析钩子
// router.beforeResolve((to,from,next) => {
//     console.log(to,from);
// })

// 全局的后置钩子
// router.afterEach((to, from, next) => {
//     // console.log(to,from);
//     document.title = to.meta.title;
// })

export default router