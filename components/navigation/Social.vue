<template>
  <a
    :href="href"
    target="_blank"
  >
    <Icon 
      :name="iconName"
      size="2em"
    />
  </a>
</template>

<script lang="ts">
export default {
  name: 'Social',
  props: {
    href: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
div > *{
  color: var(--foreground);
}
</style>