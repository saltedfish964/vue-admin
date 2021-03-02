<template>
  <div class="home">
    <Menu
      :data="menu"
      :default-active="activeIndex"
    ></Menu>
  </div>
</template>

<script>
import Menu from '../components/Menu/index.vue';

export default {
  name: 'Home',
  components: {
    Menu,
  },
  data() {
    return {
      activeIndex: '3-1-1',
      menu: [
        {
          index: '1',
          route: '/',
          disabled: false,
          name: '首页',
        },
        {
          index: '2',
          route: '/about',
          disabled: false,
          name: '关于',
        },
        {
          index: '3',
          route: '/list',
          disabled: false,
          name: '总列表',
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
        },
        [
          {
            name: '分组-1',
          },
          {
            index: '5',
            route: '/5-1',
            disabled: false,
            name: '分组5-1',
          },
          {
            index: '6',
            route: '/6-1',
            disabled: false,
            name: '分组6-1',
          },
        ],
        [
          {
            name: '分组-2',
          },
          {
            index: '7',
            route: '/7-1',
            disabled: false,
            name: '分组7-1',
          },
          {
            index: '8',
            route: '/8-1',
            disabled: false,
            name: '分组8-1',
          },
        ],
      ],
    };
  },
};
</script>
