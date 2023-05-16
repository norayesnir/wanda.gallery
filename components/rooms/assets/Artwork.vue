<template>
  <div class="artwork">
    <img class="artwork-image" :src="src" :alt="src">
  </div>
</template>

<script lang="ts">
export default ({
  name: "Artwork",
  props: {
    src: {
      type: String,
      required: true,
    }
  }
})
</script>

<style scoped lang="scss">
  .artwork{
    .artwork-image{
      width: 100%;
      border-radius: 16px;
      margin-bottom: 20px;
    }
  }
</style>