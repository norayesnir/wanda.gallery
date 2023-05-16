<script lang="ts">
export default {
  name: 'Aframe',
  props: {
    scene: {
      type: String,
      required: true,
      default: '<a-scene><a-entity mobile-controls><a-text value="No scene rendered" color="#fff" position="0 4 -5" align="center"geometry="primitive: plane; width: 4; height: .5" material="color: #333"></a-text></a-entity></a-scene>'
    }
  }
}
</script>

<template>
  <div 
    class="aframe" 
    v-html="scene"
  >
  </div>
</template>

<style scoped>
.aframe{
  background-color: var(--background);
  margin-bottom: 20px;
  width: 100%;
  height: 100vh;
}
</style>