import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     path: '/',
        //     name: '/main',
        //     component: () => import('../pages/main-page/MainPage.vue')
        // },
        {
            path: '/',
            name: 'pokestore',
            component: () => import('../pages/pokestore-page/PokeStorePage.vue')
        },
        {
            path: '/pokemon_data/:id',
            name: 'pokemon_data',
            component: () => import('../pages/pokemon-page/PokemonPage.vue')
        },
        {
            path: '/basket',
            name: 'basket',
            component: () => import('../pages/basket-page/BasketPage.vue')
        },
        {
            path: '/rating',
            name: 'rating',
            component: () => import('../pages/rating-page/RatingPage.vue')
        }
    ]
})

export default router;