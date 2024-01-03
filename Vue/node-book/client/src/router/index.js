import {createRouter,createWebHistory} from 'vue-router'
const routes = [
    {
        path:'/login',
        name:'login',
        component:() => import('../views/Login.vue'),
        meta: {
            title:'登录'
        }
    },
    {
        path:'/register',
        name:'register',
        component:() => import('../views/Register.vue'),
        meta: {
            title:'注册'
        }
    },
    {
        path:'/NoteClass',
        name:'noteClass',
        component:() => import('../views/NoteClass.vue'),
        meta: {
            title:'笔记分类'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由守卫
const whitePath = ['/login','/register']
router.beforeEach((to,from,next) => {
    document.title = to.meta.title

    if(!whitePath.includes(to.path)) { // 你想去详情页
        if(!sessionStorage.getItem('userInfo')){ // 没登入
            router.push('./login')
            return
        }
        next()
        return 
    }
    next()
})

export default router