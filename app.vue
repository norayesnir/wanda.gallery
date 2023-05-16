<template>
  <div class="app">
    <NavigationMenu />
    <div class="page-content">
      <NuxtPage />
    </div>
  </div>
</template>

<!-- <script>
export default {
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://aframe.io/releases/1.2.0/aframe.min.js'
    document.head.appendChild(script)
  },
}
</script> -->

<style scoped lang="scss">
p{
  margin-top: 100px;
}
</style>
