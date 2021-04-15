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
        :default-active="defaultActive"
        @select="onMenuSelect"
      ></Menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Menu from '@/components/Menu/index.vue';

export default {
  props: {
    collapse: Boolean,
    menu: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      defaultActive: 'Home',
    };
  },
  components: {
    Menu,
  },
  methods: {
    onMenuSelect(routerName) {
      const { name } = this.$route;
      if (name === routerName) return;
      this.$router.push({ name: routerName })
        .then(() => {
          this.$store.commit('tabs/ADD_NEW_TAB', {
            title: this.$route.name,
            name: this.$route.fullPath,
            route: this.$route,
          });
          this.$store.commit('tabs/CHANGE_ACTIVE', this.$route.fullPath);
        });
    },
  },
  created() {
    this.defaultActive = this.$route.name;
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
