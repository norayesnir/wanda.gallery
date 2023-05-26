<template>
  <div class="footer">
    <div class="content">
      <p> info@wanda.gallery</p>
      <p> © Copyright Wanda Tuerlinckx  —  All rights reserved {{ date }} </p>
    </div>

    <div class="socials">
      <a href="https://www.facebook.com/wanda.tuerlinckx">
        <Icon 
          name="bxl:facebook"
          class="facebook"
          size="24"
        />
      </a>
      <a href="https://www.linkedin.com/in/wanda-tuerlinckx-3618ab104/" >
        <Icon 
          name="bxl:linkedin"
          class="linkedin"
          size="24"
        />
      </a>
      <a href="https://www.instagram.com/wandatuerlinckxphotography/">
        <Icon  
          name="bxl:instagram"
          class="instagram"
          size="24"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  let date = new Date().getFullYear();
</script>

<style scoped lang="scss">
.footer{
  padding: 32px 48px;
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  
  .content{
    p{
      text-transform: uppercase;
      font-size: 9px;
      margin: 0;
    }
  }

  .socials{
    display: flex;
    gap: 16px;
  }
}

@media screen and (min-width: 1000px) {
  .footer{
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .content{
      p{
        font-size: 12px;
      }
    }
  }
}
</style>