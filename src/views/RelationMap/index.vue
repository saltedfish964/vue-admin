<template>
  <div
    class="map-box"
    ref="map-box"
  >
    <div id="map"></div>
  </div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill';
import debounce from 'lodash.debounce';
import { Graph } from '@antv/x6';

export default {
  data() {
    return {
      graph: null,
      data: {
        // 节点
        nodes: [
          {
            id: 'node1', // String，可选，节点的唯一标识
            x: 40, // Number，必选，节点位置的 x 值
            y: 40, // Number，必选，节点位置的 y 值
            width: 80, // Number，可选，节点大小的 width 值
            height: 40, // Number，可选，节点大小的 height 值
            label: 'hello', // String，节点标签
          },
          {
            id: 'node2', // String，节点的唯一标识
            x: 160, // Number，必选，节点位置的 x 值
            y: 180, // Number，必选，节点位置的 y 值
            width: 80, // Number，可选，节点大小的 width 值
            height: 40, // Number，可选，节点大小的 height 值
            label: 'world', // String，节点标签
          },
        ],
        // 边
        edges: [
          {
            source: 'node1', // String，必须，起始节点 id
            target: 'node2', // String，必须，目标节点 id
          },
        ],
      },
      ro: null,
    };
  },
  methods: {
    onResize(mapBox) {
      this.ro = new ResizeObserver(debounce((entries) => {
        const { width, height } = entries[0].contentRect;
        this.graph.resize(width, height);
        this.graph.centerContent();
      }, 500));
      this.ro.observe(mapBox);
    },
  },
  mounted() {
    const mapBox = this.$refs['map-box'];
    const initWidth = mapBox.offsetWidth;
    const initHeight = mapBox.offsetHeight;
    this.graph = new Graph({
      container: document.getElementById('map'),
      panning: true,
      width: initWidth,
      height: initHeight,
      background: {
        color: '#fffbe6', // 设置画布背景颜色
      },
      grid: {
        size: 10, // 网格大小 10px
        visible: true, // 渲染网格背景
      },
    });
    this.graph.fromJSON(this.data);
    this.graph.centerContent();

    this.onResize(mapBox);
  },
  beforeDestroy() {
    if (this.graph) {
      this.graph.dispose();
    }
  },
};
</script>

<style lang="less" scoped>
.map-box {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
</style>
