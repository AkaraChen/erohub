import {createRouter, createWebHistory,} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/page/1'
    },
    {
        path: '/page/:page',
        component: () => import("@/views/Page")
    },
    {
        path: '/archives/:post',
        component: () => import("@/views/Post")
    },
    {
        path: '/konachan',
        redirect: '/konachan/page/1',
    },
    {
        path: '/konachan/page/:page',
        component: () => import("@/views/Konachan"),
    },
    {
        path: '/expliyh',
        redirect: '/expliyh/page/1',
    },
    {
        path: '/expliyh/page/:page',
        component: () => import("@/views/Expliyh"),
    },
    {
        path: '/:w+',
        component: () => import("@/views/404")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
