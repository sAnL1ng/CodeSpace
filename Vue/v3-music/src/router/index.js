// 完成路由配置 url -> components
import { createRouter, createWebHashHistory } from "vue-router";
// PC
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            // App.vue是用来挂载的不是用来写具体业务的
            component: () => import('@/views/Root.vue'),
            redirect:{ name: 'discover' },
            children: [
                {
                    path: 'discover',
                    name: 'discover',
                    component: () => import('@/views/discover/Discover.vue'),
                }
            ]
        }
    ]
});

export default router;