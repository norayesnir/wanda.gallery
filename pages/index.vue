<template>
  <div>
    <div class="flex">
      <section class="section-one">
        <HomepageHero />
      </section>
      <section class="section-two">
        <HomepageCategorySelection/>
      </section>
    </div>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
  .flex{
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    padding: 0 48px;
  }

  .section-one{
    height: calc(100vh - 96px);
    display: flex;
    align-items: center;
  }


  .section-two{
    min-height: calc(100vh + (48px * 2));
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  @media screen and (max-height: 1000px) {
    .section-one, .section-two{
      height: initial !important;
      display: initial;
    }
  }
</style>