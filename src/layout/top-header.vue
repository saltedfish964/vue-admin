<template>
  <div class="header">
    <div
      class="menu-ctrl"
      @click="$emit('on-collapse', !collapse)"
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
</template>

<script>
export default {
  props: {
    collapse: Boolean,
  },
};
</script>

<style lang="less" scoped>
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
</style>
