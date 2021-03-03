<template>
  <section class="app-wrap">
    <div
      class="sidebar"
      :class="{
        'sidebar-active': collapse
      }"
    >
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <Menu
          :data="menu"
          class="siderbar-menu"
          :collapse="collapse"
        ></Menu>
      </el-scrollbar>
    </div>
    <div class="main-container">
      <button @click="collapse = !collapse">Click</button>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import Menu from '@/components/Menu/index.vue';

export default {
  components: {
    Menu,
  },
  data() {
    return {
      collapse: false,
      menu: [
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
    };
  },
};
</script>

<style lang="less" scoped>
.app-wrap {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.sidebar {
  transition: all 0.3s;
  width: 300px;
  background: #fff;
  border-right: solid 1px #e6e6e6;
  .scrollbar-wrapper {
    height: 100vh;
  }
  /deep/.el-scrollbar__wrap {
    overflow: scroll;
    overflow-x: hidden;
  }
  /deep/.el-menu {
    border-right: 0;
  }
}
.sidebar-active {
  width: 64px;
}
.main-container {
  flex: 1;
}
</style>
