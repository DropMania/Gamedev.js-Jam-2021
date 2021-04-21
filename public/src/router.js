import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import Game from './components/Game.vue'
import Enter from './components/Enter.vue'
import Search from './components/Search.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/game/:id',
        name: 'Game',
        component: Game
    },
    {
        path: '/enter/:id',
        name: 'Enter',
        component: Enter
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
