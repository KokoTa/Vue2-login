// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';
import './assets/css/reset.scss';

Vue.config.productionTip = false;

// 全局的 axios 默认值
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://api.github.com';

// 全局拦截器
axios.interceptors.request.use(
  (config) => {
    // 在发送请求前添加token
    if (store.state.token) {
      console.log('给头信息添加token');
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => {
    console.log('请求成功');
    return response;
  },
  (error) => {
    // 响应错误时跳转回登录页
    if (error.response) {
      if (error.response.status === 401) {
        store.commit('loginout'); // 清除token
        router.replace('/login'); // 跳转至登录页
        console.log('请求失败，清除这个无效的token，跳转至登录页');
      }
    }
    return Promise.reject(error);
  },
);

// 全局注册axios
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
