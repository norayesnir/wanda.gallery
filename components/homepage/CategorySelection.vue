<script setup lang="ts">
  interface Category {
    id: number;
    title: string;
    intro: string;
    cover_url: string;
  }

  interface CategoryData {
    categories: {
      data: Category[];
    }
  }

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

const { data, error, refresh } = useAsyncQuery<CategoryData>(query);
</script>

<template>
  <div class="container">
    <h1>Projects</h1>
    <div 
      class="category-selection" 
    >
      <div 
        class="category"
        v-for="(category, key) in data.categories.data"
        :class="{'single-category' : (data.categories.data.length <= 1)}"
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
.container{
  width: 100%;
}

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
      max-width: 470px;

      align-items: left;
    }
  }
}

.single-category{
  margin: 0 auto;
}

@media screen and (min-width: 1000px) {
  .category-selection{
    flex-direction: row;
    justify-content: space-between;

    .category{
      position: relative;
      flex-direction: row;
      .content{
        text-align: left;
        gap: 16px;

        h3{
          font-size: 32px;
        }

        p{
          font-size: 16px;
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