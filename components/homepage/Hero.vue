<script setup lang="ts">
  interface Hero {
    id: number;
    title: string;
    intro: string;
    url: string;
  }

  interface HeroData {
    pages: {
      data: Hero[];
    }
  }

  const query = gql`
  query {
    pages {
      data {
        id
        title
        intro
        url
      }
    }
  }
`;

const { data, error, refresh } = useAsyncQuery<HeroData>(query);
</script>

<template>
  <div class="hero" v-for="hero in data.pages.data" :key="hero.id">
    <div class="content">
      <h1>{{ hero.title }}</h1>
      <p>{{ hero.intro }}</p>
    </div>
    <img class="image" :src="hero.url" :alt="hero.title">
  </div>
</template>

<style scoped lang="scss">
  .hero{
    z-index: -3;
    display: flex;
    gap: 64px;
    flex-direction: column;
    min-width: 280px;
    max-width: 500px;
    margin: 0 auto 100px;

    .content{
      min-width: 280px;

      h1{
        font-size: 32px;
        line-height: 48px;
        letter-spacing: 0.15em;
        width: 300px;
      }

      p{
        margin-top: 10px;
      }

      .buttons{
        display: flex;
        gap: 20px;
        margin-top: 20px;
      }
    }

    .image{
      width: 100%;
    }
  }

  @media screen and (min-width: 875px) {
    .hero{
      flex-direction: row;
      align-items: center;
      justify-content: center;
      max-width: initial;
      margin-bottom: 0;

      .content{
        text-align: right;
        width: 450px;
        min-width: 450px;

        h1{
          font-size: 48px;
          line-height: 64px;
          width: 600px;
        }

        .buttons{
          justify-content: right;
        }
      }

      .image{
        max-width: 550px;
      }
    }
  }
</style>