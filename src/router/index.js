import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout/index.vue';

Vue.use(VueRouter);

const routes = [
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
  { path: '/404', component: () => import('@/views/404/index') },
  { path: '*', redirect: '/404' },
];

const router = new VueRouter({
  routes,
});

router.addRoutes([
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
      },
    ],
  },
]);

export default router;
