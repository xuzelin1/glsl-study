<template>
  <div>
    <canvas id="matrix-canvas"></canvas>
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

</style>