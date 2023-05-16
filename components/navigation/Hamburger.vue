<template>
  <div 
    @click="hamburgerMenuToggled = (hamburgerMenuToggled == false ? true : false)"
    class="hamburger"
  >
    <Icon 
      v-if="!hamburgerMenuToggled"
      name="ic:outline-menu" 
      size="2em"
    />
    <Icon
      v-else
      name="ic:outline-close"
      size="2em"
    />
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useNavigationMenuStore } from "~/store/navigationMenuStore"

  const main = useNavigationMenuStore();

  const { hamburgerMenuToggled } = storeToRefs(main);
</script>

<style scoped lang="scss">
div > *{
  color: var(--foreground);
}
</style>