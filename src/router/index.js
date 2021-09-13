import {createRouter, createWebHashHistory} from 'vue-router'
import Page from "../components/Page";
import Post from "../components/Post";

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
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
