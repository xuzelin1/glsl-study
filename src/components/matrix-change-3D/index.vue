<template>
  <div>
    <canvas id="matrix-canvas-3d"></canvas>

    <div id="uiContainer">
      <div id="ui">
        <div id="x"></div>
        <div id="y"></div>
        <div id="z"></div>
        <div id="angleX"></div>
        <div id="angleY"></div>
        <div id="angleZ"></div>
        <div id="scaleX"></div>
        <div id="scaleY"></div>
        <div id="scaleZ"></div>
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
  @import url("https://webgl2fundamentals.org/webgl/resources/webgl-tutorials.css");
  #matrix-canvas {
    width: 100vw;
    height: 100vh;
    border: 2px solid #000;
    margin: auto;
  }
  #uiContainer {
    position: absolute;
    top: 20px;
    right: 50px;
  }
</style>