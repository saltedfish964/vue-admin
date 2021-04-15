const state = () => ({
  active: '',
  list: [],
});

const getters = {
  getTabsItem(s) {
    const currentState = s;
    return (name) => currentState.list.find((item) => item.name === name);
  },
};

const actions = {
};

const mutations = {
  CHANGE_ACTIVE: (s, value) => {
    const currentState = s;
    if (currentState.active === value) return;
    currentState.active = value;
  },
  ADD_NEW_TAB: (s, tab) => {
    const currentState = s;
    const index = currentState.list.findIndex((item) => item.name === tab.name);
    if (index !== -1) return;
    currentState.list.push(tab);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
