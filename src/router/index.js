import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to) {
        return to.meta.scrollToTop ? { x: 0, y: 0 } : true;
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/Home.vue'),
        },
        {
            path: '/search/:city',
            name: 'SearchItem',
            component: () => import('@/pages/SearchItem.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/pages/About.vue'),
        },
        {
            path: '*',
            name: 'Error',
            meta: {
                title: 'Error!',
            },
            component: () => import('@/pages/Error.vue'),
        },
    ],
});



export default router;
