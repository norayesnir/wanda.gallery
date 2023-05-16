<template>
  <div class="contact">
    <h1>Contact</h1>
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

<style scoped lang="scss">
.contact{
  max-width: 600px;
  margin: 0 auto;
}
.socials{
  display: flex;
  justify-content: space-evenly;

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
</style>