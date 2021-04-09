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
      <TopHeader
        :collapse="collapse"
        @on-collapse="onCollapse"
      ></TopHeader>
      <VTabs
        v-if="editableTabs.length"
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
      <router-view></router-view>
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
      editableTabsValue: '2',
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
</style>
