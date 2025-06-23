/**
 * 创建并暴露路由
 */

// 引入 createRouter
import { createRouter, createWebHistory } from "vue-router";

// 引入组件
import Home from '../components/router/A/Home.vue'
import News from '../components/router/A/News.vue'
import About from '../components/router/A/About.vue'

// 创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/about',
            component: About
        }
    ]
})

// 暴露router
export default router