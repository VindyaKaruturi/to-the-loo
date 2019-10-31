import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/LooLanding.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
