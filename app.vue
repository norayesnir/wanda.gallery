<template>
  <div id="app">
    <NavigationMenu />
    <div class="page-content">
      <NuxtPage />
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      // Check if the route has changed
      if (to.path !== from.path) {
        // Reload the page
        location.reload();
      }
    },
  },
};
</script>

<style scoped lang="scss">
#app{
  position: relative;

  .navigation-menu{
    z-index: 1000;
    position: fixed;
    width: 100%;
  }

  .page-content{
    padding-top: 96px;
    padding-bottom: 10vh;
  }
}
</style>

