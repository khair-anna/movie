import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import Favourites from '@/views/Favourites.vue'
import Trending from '@/views/TrendingMovies.vue'
import UpcomingMovies from '@/views/UpcomingMovies.vue'
import Search from '@/views/SearchMovies.vue'
import MovieAbout from '@/views/MovieAbout.vue'
import LogIn from '@/views/LogIn.vue'
import SignUp from '@/views/SignUp.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/favourites',
            name: 'Favourites',
            component: Favourites
        },
        {
            path: '/trending',
            name: 'Trending',
            component: Trending
        },
        {
            path: '/upcoming',
            name: 'UpcomingMovies',
            component: UpcomingMovies
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/movie/:id', 
            name: 'MovieAbout',
            component: MovieAbout
        },
        {
            path: '/login',
            name: 'LogIn',
            component: LogIn
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp
        }
    ]
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

export default router;

