<template>
  <ul class="routes">
    <h6>Projects</h6>
    <RouterLink
      @click="navigation.navigationState === false"
      v-for="category in data.categories.data"
      class="route"
      :key="category.id"
      :to="`project/${category.id}`"
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

<script setup lang="ts">
import { useNavigationMenuStore } from "~/store/navigationMenuStore"

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

const { data, error, refresh } = useAsyncQuery(query);

const navigation = useNavigationMenuStore();
</script>

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

    &:hover{
      opacity: .8;
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
  color: var(--primary);
  background: -webkit-linear-gradient(45deg, var(--primary), var(--accent));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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