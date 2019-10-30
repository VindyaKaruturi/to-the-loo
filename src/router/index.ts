import Vue from 'vue';
import VueRouter from 'vue-router';
import LooLanding from '@/views/LooLanding.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LooLanding,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
