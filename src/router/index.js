import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = createRouter();

const DEFAULT_TITLE = 'Vue Tailwind';
router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router


function createRouter() {
    const router = new Router({
        mode: 'history',
        routes,
        linkActiveClass: 'active'
    });

    return router
}
