import {createRouter, createWebHashHistory} from 'vue-router'
import Page from "../components/Page";
import Post from "../components/Post";

const routes = [
    {
        path: '/',
        name: 'Homepage',
        redirect: '/page/1'
    },
    {
        path: '/page/:page',
        name: 'Page',
        component: Page
    },
    {
        path: '/archives/:post',
        name: 'Post',
        component: Post
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
