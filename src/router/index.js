import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login';
import List from '@/views/list';
import store from '../store';

Vue.use(Router);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/list',
    name: 'List',
    meta: {
      requireAuth: true, // 该路由是否需要提供验证
    },
    component: List,
  },
  {
    path: '*',
    redirect: '/List',
  },
];


const router = new Router({
  routes,
});

// 页面刷新时查看是否有token，有的话将token赋给状态
if (localStorage.getItem('token')) {
  console.log('本地已缓存token');
  store.commit('login', localStorage.getItem('token'));
}

// 全局路由
router.beforeEach((to, from, next) => {
  // 检查要访问的路由是否需要验证
  if (to.matched.some(record => record.meta.requireAuth)) {
    console.log('此路由需要验证token');
    // 检查是否已经登录
    if (store.state.token) {
      console.log('状态中存在token');
      next();
    } else {
      next({
        path: '/login',
      });
    }
  } else {
    next();
  }
});

export default router;
