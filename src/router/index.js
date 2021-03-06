import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout/index.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/404', name: '404', component: () => import('@/views/404/index') },
  { path: '*', redirect: '/404' },
];

const createRouter = () => new VueRouter({
  routes,
});

const router = createRouter();

router.addRoutes([
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: {
          menuActive: 'Home',
          tagName: '首页',
        },
      },
      {
        path: '/relationmap',
        name: 'RelationMap',
        component: () => import(/* webpackChunkName: "relationmap" */ '../views/RelationMap/index.vue'),
        meta: {
          menuActive: 'RelationMap',
          tagName: '关系图',
        },
      },
      {
        path: '/task',
        name: 'Task',
        component: () => import(/* webpackChunkName: "task" */ '../views/Task/index.vue'),
        meta: {
          menuActive: 'Task',
          tagName: '任务',
        },
      },
    ],
  },
  {
    path: '/demo/',
    component: Layout,
    children: [
      {
        path: 'one',
        name: 'DemoOne',
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
]);

// 重置路由
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
