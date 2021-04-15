<template>
  <div class="home">首页<button @click="addNewMenu">添加菜单</button></div>
</template>

<script>
import { resetRouter } from '@/router/index';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  methods: {
    addNewMenu() {
      // resetRouter();
      console.log(resetRouter);
      resetRouter();
      this.$router.push({ name: '404' });
      // this.$store.commit('menu/addMenu', {
      //   index: 'Other',
      //   route: '/other',
      //   disabled: false,
      //   name: '其他',
      //   icon: 'el-icon-location',
      // });
    },
  },
};
</script>
