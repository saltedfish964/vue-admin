<template>
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
</template>

<script>
import { mapState } from 'vuex';
import Menu from '@/components/Menu/index.vue';

export default {
  props: {
    collapse: Boolean,
  },
  components: {
    Menu,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      menu: (state) => state.menu.list,
    }),
  },
};
</script>

<style lang="less" scoped>
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
</style>
