import Vue from 'vue';
import Vuex from 'vuex';
import menu from './modules/menu';
import tabs from './modules/tabs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menu,
    tabs,
  },
});
