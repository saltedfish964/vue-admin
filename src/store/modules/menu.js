const state = () => ({
  list: [
    {
      index: '1',
      route: '/',
      disabled: false,
      name: '首页',
      icon: 'el-icon-location',
    },
    {
      index: '2',
      route: '/about',
      disabled: false,
      name: '关于',
      icon: 'el-icon-menu',
    },
    {
      index: '3',
      route: '/list',
      disabled: false,
      name: '总列表',
      popperClass: 'test-class',
      icon: 'el-icon-menu',
      children: [
        [
          {
            name: '下拉分组',
          },
          {
            index: '3-1',
            route: '/list1',
            disabled: false,
            name: '列表-1',
            icon: 'el-icon-menu',
            children: [
              {
                index: '3-1-1',
                route: '/list3-1-1',
                disabled: false,
                name: '列表3-1-1',
              },
              {
                index: '3-2-1',
                route: '/list3-2-1',
                disabled: false,
                name: '列表-3-2-1',
              },
            ],
          },
        ],
        [
          {
            name: '下拉分组-2',
          },
          {
            index: '3-2',
            route: '/list2',
            disabled: false,
            name: '列表-2',
          },
        ],
      ],
    },
    {
      index: '4',
      route: '/other',
      disabled: false,
      name: '其他',
      icon: 'el-icon-menu',
    },
  ],
});

const getters = {};

const actions = {};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
