const state = () => ({
  active: '',
  list: [
    {
      index: 'Home',
      route: '/',
      disabled: false,
      name: '首页',
      icon: 'el-icon-location',
    },
    {
      index: 'DemoOne',
      route: '/',
      disabled: false,
      name: 'Demo',
      icon: 'el-icon-location',
    },
  ],
});

const getters = {};

const actions = {};

const mutations = {
  addMenu(currentState, menu) {
    currentState.list.push(menu);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
