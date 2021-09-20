import {createRouter, createWebHistory,} from 'vue-router'
const Page = () => import("../components/Page")
const Post = () => import("../components/Post")
const Konachan = () => import("@/external/Konachan")
const Expliyh = () => import("@/external/Expliyh")

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
