<template>
  <div class="home">首页<button @click="addNewMenu">添加菜单</button></div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  methods: {
    addNewMenu() {
      this.$store.commit('menu/addMenu', {
        index: 'Other',
        route: '/other',
        disabled: false,
        name: '其他',
        icon: 'el-icon-location',
      });
    },
  },
};
</script>
