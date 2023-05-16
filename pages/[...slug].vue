<template>
  <div>
    <ControlsPopup />
    <RoomsGhibli />
  </div>
</template>

<script setup lang="ts">
  // const { data } = await useAsyncData(
  //   () => queryContent('').findOne()
  // )

  const { path } = useRoute()
  const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).only(['scene']).findOne()
  })
</script>

<style scoped lang="scss">
.error-message{
  margin-top: 100px;
}
</style>