import { createRouter, createWebHistory} from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue';
import Home from '../views/Home.vue';
import GuestLayout from '../components/GuestLayout.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealDetails from '../views/MealDetails.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

const routes = [
    {
        path:'/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealsByIngredient
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            },
            {
                path: "/:catchAll(.*)",
                component: NotFoundPage
            }
        ]
    },
    {
        path: '/guest',
        component: GuestLayout
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;