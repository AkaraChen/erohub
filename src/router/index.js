import {createRouter, createWebHistory,} from 'vue-router'
const Page = () => import("@/views/Page")
const Post = () => import("@/views/Post")
const Konachan = () => import("@/views/Konachan")
const Expliyh = () => import("@/views/Expliyh")

const routes = [
    {
        path: '/',
        redirect: '/page/1'
    },
    {
        path: '/page/:page',
        component: Page
    },
    {
        path: '/archives/:post',
        component: Post
    },
    {
        path: '/konachan',
        redirect: '/konachan/page/1',
    },
    {
        path: '/konachan/page/:page',
        component: Konachan,
    },
    {
        path: '/expliyh',
        redirect: '/expliyh/page/1',
    },
    {
        path: '/expliyh/page/:page',
        component: Expliyh,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
