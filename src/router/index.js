import {createRouter, createWebHashHistory} from 'vue-router'
import Page from "../components/Page";
import Post from "../components/Post";
import Konachan from "@/Konachan/Konachan";
import KPage from "@/Konachan/KPage";
import Expliyh from "@/Expliyh/Expliyh";
import EPage from "@/Expliyh/EPage";

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
        component: Konachan,
        redirect: '/konachan/page/1',
        children:[
            {
                path: '/konachan/page/:page',
                component:KPage
            }
        ],
    },
    {
        path: '/expliyh',
        component: Expliyh,
        redirect: '/expliyh/page/1',
        children: [
            {
                path: '/expliyh/page/:page',
                component: EPage
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
