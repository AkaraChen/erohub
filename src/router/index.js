import {createRouter, createWebHistory} from 'vue-router'
import Page from "../components/Page";
import Post from "../components/Post";
import Konachan from "@/external/Konachan";
import Expliyh from "@/external/Expliyh";

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
