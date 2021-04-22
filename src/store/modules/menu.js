const state = () => ({
  active: 'Home',
  list: [
    {
      index: 'Home',
      disabled: false,
      name: '首页',
      icon: 'el-icon-location',
    },
    {
      index: 'RelationMap',
      disabled: false,
      name: '关系图',
      icon: 'el-icon-location',
    },
    {
      index: 'DemoOne',
      disabled: false,
      name: 'Demo',
      icon: 'el-icon-location',
    },
  ],
});

const getters = {};

const actions = {};

const mutations = {
  addMenu(s, menu) {
    const currentState = s;
    currentState.list.push(menu);
  },
  setActive(s, value) {
    const currentState = s;
    currentState.active = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
