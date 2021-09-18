import {createRouter, createWebHashHistory} from 'vue-router'
import Page from "../components/Page";
import Post from "../components/Post";
import Konachan from "@/Konachan/Konachan";
import KPage from "@/Konachan/KPage";

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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
