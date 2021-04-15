import router from '@/router/index';

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
    if (currentState.list.length > 1) {
      const { list } = currentState;
      currentState.list = list.map((tabItem) => Object.assign(tabItem, { closable: true }));
    }
  },
  REMOVE_TAB_ITEM: (s, name) => {
    const currentState = s;
    let activeName = currentState.active;
    let nextTab;
    if (activeName === name) {
      currentState.list.forEach((tab, index) => {
        if (tab.name === name) {
          nextTab = currentState.list[index + 1] || currentState.list[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }
    currentState.active = activeName;
    currentState.list = currentState.list.filter((tab) => tab.name !== name);
    if (currentState.list.length === 1) {
      currentState.list = currentState.list.map((tab) => Object.assign(tab, { closable: false }));
    }
    if (nextTab) {
      router.push({
        path: nextTab.route.path,
        query: nextTab.route.query,
        params: nextTab.route.params,
      });
    }
    console.log(currentState);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
