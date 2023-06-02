<script setup lang="ts">
import { gql } from '@apollo/client/core';
import { useNavigationMenuStore } from "~/store/navigationMenuStore";

const navigation = useNavigationMenuStore();

interface Category {
  id: number;
  title: string;
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
      }
    }
  }
`;

const { data, refresh } = useAsyncQuery<CategoryData>(query);
</script>

<template>
  <ul 
    class="routes"
    v-if="data && data.categories.data && data.categories.data"
  >
    <h6>Projects</h6>
    <RouterLink
      @click="navigation.navigationState === false"
      v-for="category in data.categories.data"
      class="route"
      :key="category.id"
      :to="`/project/${category.id}`"
    >
      {{ category.title }}
    </RouterLink>
    <h6>Wanda Tuerlickx</h6>
    <NuxtLink
      @click="navigation.navigationState === false"
      class="route"
      href="https://wandatuerlinckx.com/"
    >
      Portfolio
    </NuxtLink>
    <NuxtLink
      @click="navigation.navigationState === false"
      class="route"
      href="https://wandatuerlinckx.com/about/"
    >
      About
    </NuxtLink>
    <NuxtLink
      @click="navigation.navigationState === false"
      class="route"
      href="https://wandatuerlinckx.com/about/"
    >
      Contact
    </NuxtLink>
  </ul>
</template>

<style scoped lang="scss">
.routes{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  .route{
    padding: 0px 10px;
    font-size: 16px;
    text-transform: capitalize;
    opacity: .9;

    &:hover{
      opacity: .7;
      color: var(--primary);
    }
  }

  h6{
    margin-top: 32px;
    display: none;
    visibility: hidden;
  }
}

.router-link-active{
  opacity: 1;
}

@media screen and (max-width: 550px) {

  .route{
    padding-left: 0 !important;
    font-size: 28px !important;
    font-weight: 900;
  }

  h6{
    visibility: visible !important;
    display: initial !important;
  }
}
</style>