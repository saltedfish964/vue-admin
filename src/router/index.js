import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: 'Home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
      },
    ],
  },
  {
    path: '/demo/',
    component: Layout,
    children: [
      {
        path: 'one',
        component: {
          render(h) {
            return h('h1', '测试1');
          },
        },
      },
      {
        path: 'two',
        component: {
          render(h) {
            return h('h1', '测试2');
          },
        },
      },
      {
        path: 'three',
        component: {
          render(h) {
            return h('h1', '测试3');
          },
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
