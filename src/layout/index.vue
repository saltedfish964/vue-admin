<template>
  <section class="app-wrap">
    <Sidebar :collapse="collapse"></Sidebar>
    <div
      class="main-container"
      :style="`width: ${!collapse ? 'calc(100vw - 300px)' : 'calc(100vw - 64px)'}`"
    >
      <TopHeader
        :collapse="collapse"
        @on-collapse="onCollapse"
      ></TopHeader>
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
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
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
