<template>
  <NuxtLink
    :href="to"
    class="border-gradient button"
  >
    {{ $props.name }}
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  }
})
</script>

<style scoped lang="scss">
  a{
    width: fit-content;
    padding: 10px 20px;
    color: black;
  }

  .border-gradient {
    border: 1px solid;
    border-image-slice: 1;
    border-width: 1px;
    border-image-source: linear-gradient(to left, #A5B3BB, #4F5254, #A5B3BB);
  }

</style>