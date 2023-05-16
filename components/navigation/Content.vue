<template>
  <div 
    class="navigation-content"
  >
    <ul>
      <li
        v-for="(link, key) in data"
        v-bind:key="key"
      >
        <NuxtLink
          :to="link._path"
          @click="hamburgerMenuToggled = (hamburgerMenuToggled == false ? true : false)"
        >
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
    <div class="socials">
      <NavigationSocial 
        href="https://www.facebook.com/wanda.tuerlinckx" 
        iconName="bxl:facebook"
        class="facebook"
      >
      </NavigationSocial>
      <NavigationSocial 
        href="https://www.linkedin.com/in/wanda-tuerlinckx-3618ab104/" 
        iconName="bxl:linkedin"
        class="linkedin"
      />
      <NavigationSocial 
        href="https://www.instagram.com/wandatuerlinckxphotography/" 
        iconName="bxl:instagram"
        class="instagram"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useNavigationMenuStore } from "~/store/navigationMenuStore"

  const main = useNavigationMenuStore();

  const { hamburgerMenuToggled } = storeToRefs(main);

  const { data } = await useAsyncData(
    () => queryContent('').find()
  )
</script>

<style scoped lang="scss">
  .navigation-content{
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
    padding: 32px 16px;
    
    //Glassmorphism
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    ul{
      display: flex;
      flex-direction: column;
      gap: 6px;

      li{
        a{
          max-width: 200px;
          padding: 6px 10px;
          border-radius: 6px;
          color: var(--foreground);

          font-size: larger;
          font-weight: 100;
          text-transform: uppercase;

          display: flex;
          align-items: center;
          gap: 10px;

          &:hover{
            font-weight: 400;
          }
        }
      }
    }
    .socials{
      display: flex;
      margin-top: 50px;
      gap: 24px;
      
      a{
        padding: 6px;
        border-radius: 6px;
      }

      .facebook{
        &:hover{
          color: white;
          background-color: #1877F2;
        }
      }

      .linkedin{
        &:hover{
          color: white;
          background-color: #0077B5;
        }
      }

      .instagram{
        &:hover{
          color: white;
          background-color: rgb(214, 36, 159, .25);
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
        }
      }
    }
    .router-link-active{
      font-weight: 400;
    }
  }
</style>