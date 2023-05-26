<template>
  <div id="app">
    <NavigationMenu />
    <div class="page-content">
      <NuxtPage />
    </div>
  </div>
</template>

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
  }
}
</style>

