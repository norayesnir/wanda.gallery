<script setup lang="ts">
  const query = gql`
  query {
    categories {
      data {
        id
        title
        intro
        cover_url
      }
    }
  }
`;

const { data, error, refresh } = useAsyncQuery(query);
</script>

<template>
  <div>
    <h1>Projects</h1>
    <div class="category-selection">
      <div 
        class="category"
        v-for="(category, key) in data.categories.data"
      >
        <img 
          class="image" 
          :src="category.cover_url" 
          :alt="category.cover_url"
        >
        <div class="content">
          <h3>{{ category.title }}</h3>
          <p>{{ category.intro }}</p>
          <TemplateButton name="View this project" :to="`project/${category.id}`"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1{
  margin-bottom: 64px;
}
.category-selection{
  width: 100%;
  display: flex;
  gap: 64px;
  justify-self: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  .category{
    display: flex;
    gap: 32px;
    align-items: center;
    flex-direction: column;

    .image{
      width: 100%;
    }

    .content{
      display: flex;
      flex-direction: column;
      gap: 8px;

      align-items: left;
    }
  }
}

@media screen and (min-width: 1000px) {
  .category-selection{
    flex-direction: row;
    justify-content: space-between;

    .category{
      position: relative;
      flex-direction: row;
      max-width: 40%;
      .content{
        text-align: left;
        gap: 16px;

        h3{
          font-size: 32px;
        }

        p{
          font-size: 24px;
          margin: 0;
        }
      }
    }
    .image{
      max-width: 369px;
    }
  }
}
</style>