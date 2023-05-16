<template>
  <div 
    class="navigation-menu"
    :class="{'align-top' : hamburgerMenuToggled}"
  >
    <div 
      class="options"
    >
      <div class="hamburger-logo-flex">
        <NavigationHamburger />

        <NuxtLink to="/">
          <h2>Wanda Experience</h2>
        </NuxtLink>
      </div>
    </div>
    <div 
      class="navigation-content"
      :class="{'menu-active' : hamburgerMenuToggled}"
    >
      <NavigationContent v-if="hamburgerMenuToggled"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useNavigationMenuStore } from "~/store/navigationMenuStore"

  const main = useNavigationMenuStore();

  const { hamburgerMenuToggled } = storeToRefs(main);
</script>

<style scoped lang="scss">
  .navigation-menu{
    position: fixed;
    z-index: 100;
    width: 100%;

    .options{
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 16px 6px;
      align-items: center;

      //Glassmorphism
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }

    .navigation-content{
      position: relative;
    }

    .hamburger-logo-flex{
      display: flex;
      align-items: center;
      gap: 20px;

      h2{
        font-weight: 100;
        text-transform: uppercase;
      }
    }
  }

  .align-top{
    align-items: flex-start;
  }

  .menu-active{
    height: calc(100vh - 54px);
    width: 100%;
  }

  .click-outside{
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
  }

  @media screen and (max-width: 950px) {
    .navigation-menu{
      min-width: calc(100% - 32px);
    }
  }
</style>