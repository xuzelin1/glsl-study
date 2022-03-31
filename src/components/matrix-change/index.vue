<template>
  <div>
    <canvas id="matrix-canvas"></canvas>

    <div id="uiContainer">
      <div id="ui">
        <div id="x"></div>
        <div id="y"></div>
        <div id="rotation"></div>
        <div id="scaleX"></div>
        <div id="scaleY"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { main } from './index';

export default defineComponent({
  setup() {
    onMounted(() => {
      main();
    });
  },
})
</script>

<style scoped>
  #matrix-canvas {
    width: calc(100vw - 100px);
    height: calc(100vh - 100px);
    border: 2px solid #000;
    margin: auto;
  }
  #uiContainer {
    position: absolute;
    top: 20px;
    right: 50px;
  }
</style>