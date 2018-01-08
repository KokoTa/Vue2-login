import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    token: null,
  },
  mutations: {
    loginout(state) {
      localStorage.removeItem('token');
      state.token = null;
    },
    login(state, data) {
      localStorage.setItem('token', data);
      state.token = data;
    },
  },
});
