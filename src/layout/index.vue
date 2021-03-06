<template>
  <section class="app-wrap">
    <Sidebar
      :collapse="collapse"
      :menu="menu"
    ></Sidebar>
    <div
      class="main-container"
      :style="`width: ${!collapse ? 'calc(100vw - 300px)' : 'calc(100vw - 64px)'}`"
    >
      <div class="scrollbar-wrapper">
        <div class="header-box">
          <TopHeader
            :collapse="collapse"
            @on-collapse="onCollapse"
          ></TopHeader>
          <VTabs
            v-if="editableTabs.length"
            :value="$store.state.tabs.active"
            type="border-card"
            :show-content="false"
            @tab-click="onTabClick"
            @tab-remove="removeTab"
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
        </div>
        <div class="content-box">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import VTabs from '@/components/VTabs/tabs.vue';
import VTabPane from '@/components/VTabs/tab-pane.vue';
import Sidebar from './sidebar.vue';
import TopHeader from './top-header.vue';

export default {
  components: {
    Sidebar,
    TopHeader,
    VTabs,
    VTabPane,
  },
  data() {
    return {
      collapse: false,
    };
  },
  computed: {
    ...mapState({
      editableTabs: (state) => state.tabs.list,
      menu: (state) => state.menu.list,
    }),
  },
  methods: {
    onCollapse(value) {
      this.collapse = value;
    },
    onTabClick(tab) {
      const tabItem = this.$store.getters['tabs/getTabsItem'](tab.name);
      if (tabItem.route.fullPath !== this.$route.fullPath) {
        this.$router.push({
          path: tabItem.route.path,
          query: tabItem.route.query,
          params: tabItem.route.params,
        })
          .then(() => {
            this.$store.commit('tabs/CHANGE_ACTIVE', tab.name);
            this.$store.commit('menu/setActive', tabItem.route.meta.menuActive || tabItem.route.name);
          });
      }
    },
    removeTab(targetName) {
      this.$store.commit('tabs/REMOVE_TAB_ITEM', targetName);
      const { list, active } = this.$store.state.tabs;
      const menuActive = list.find((tab) => tab.name === active);
      this.$store.commit('menu/setActive', menuActive.route.meta.menuActive || menuActive.route.name);
    },
  },
  created() {
    this.$store.commit('tabs/ADD_NEW_TAB', {
      title: this.$route.meta.tagName || this.$route.name,
      name: this.$route.fullPath,
      route: this.$route,
    });
    this.$store.commit('tabs/CHANGE_ACTIVE', this.$route.fullPath);
    this.$store.commit('menu/setActive', this.$route.meta.menuActive || this.$route.name);
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
.main-container {
  position: relative;
  transition: width 0.3s;
  flex: 1;
}
.scrollbar-wrapper {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.header-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
.content-box {
  padding-top: 105px;
  box-sizing: border-box;
  height: 100vh;
}
</style>
