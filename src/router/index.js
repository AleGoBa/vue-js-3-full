import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/pokemons',
            name: 'pokemons.index',
            component: () => import('../views/pokemons/PokemonsView.vue')
        },
        {
            path: '/pokemons/:name',
            name: 'pokemons.show',
            component: () => import('../views/pokemons/PokemonView.vue')
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: () => import('../views/NotFoundView.vue')
        }
    ]
})

export default router
