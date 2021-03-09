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
    <div
      class="main-container"
      :style="`width: ${!collapse ? 'calc(100vw - 300px)' : 'calc(100vw - 64px)'}`"
    >
      <div class="header">
        <div
          class="menu-ctrl"
          @click="collapse = !collapse"
        >
          <i :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
        </div>
        <div class="info">
          <el-avatar
            shape="square"
            size="medium"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </div>
      </div>
      <VTabs
        v-model="editableTabsValue"
        type="border-card"
        :show-content="false"
      >
        <VTabPane
          v-for="(item) in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
          :closable="item.closable"
        >
          {{item.content}}
        </VTabPane>
      </VTabs>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
import Menu from '@/components/Menu/index.vue';
import VTabs from '@/components/VTabs/tabs.vue';
import VTabPane from '@/components/VTabs/tab-pane.vue';

export default {
  components: {
    Menu,
    VTabs,
    VTabPane,
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
      editableTabsValue: '2',
      editableTabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
          closable: true,
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
        },
        {
          title: 'Tab 3',
          name: '3',
          content: 'Tab 3 content',
        },
        {
          title: 'Tab 4',
          name: '4',
          content: 'Tab 4 content',
        },
        {
          title: 'Tab 5',
          name: '5',
          content: 'Tab 5 content',
        },
        {
          title: 'Tab 5',
          name: '6',
          content: 'Tab 5 content',
        },
        {
          title: 'Tab 5',
          name: '7',
          content: 'Tab 5 content',
        },
        {
          title: 'Tab 5',
          name: '8',
          content: 'Tab 5 content',
        },
        {
          title: 'Tab 5',
          name: '9',
          content: 'Tab 5 content',
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
  position: relative;
  transition: width 0.3s;
  flex: 1;
  .header {
    display: flex;
    height: 64px;
    background: #fff;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    .menu-ctrl {
      width: 64px;
      height: 64px;
      font-size: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background: #f1f1f1;
      }
    }
    .info {
      padding-right: 15px;
    }
  }
}
</style>
