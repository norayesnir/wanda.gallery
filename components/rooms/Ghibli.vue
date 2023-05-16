<template>
  <a-scene
    background="color: #000"
  >
    <!-- <a-entity id="mario"> -->
    <a-assets>
      <!--
        Image source: http://www.ghibli.jp/works/kazetachinu/#frame&gid=1&pid=1
        Image author: Studio Ghibli
      -->
      <img 
        id="kazetachinuPoster" 
        src="androids/erica-hiroshi-ishiguro-laboratories-kyoto-japan-wanda-tuerlinckx.webp" 
        crossorigin="anonymous"
      />
      <!--
        Image source: http://www.ghibli.jp/works/ponyo/#frame&gid=1&pid=36
        Image author: Studio Ghibli
      -->
      <img 
        id="ponyoPoster" 
        src="androids/android-u-osaka-university-osaka-japan-wanda-tuerlinckx.webp" 
        crossorigin="anonymous"
      />
      <!--
        Image source: http://www.ghibli.jp/works/karigurashi/#frame&gid=1&pid=32
        Image author: Studio Ghibli
      -->
      <img 
        id="karigurashiPoster" 
        src="androids/ai-da-oxford-uk-wanda-tuerlinckx-with-dress.webp" 
        crossorigin="anonymous"
      />

      <a-mixin
        id="frame"
        geometry="primitive: plane; width: 0.8; height: 1;"
        material="color: white; shader: flat"
      ></a-mixin>
      <a-mixin
        id="poster"
        geometry="primitive: plane; width: 0.8; height: 1;"
        material="color: white; shader: flat"
        position="0 0 0.005"
      ></a-mixin>
      <a-mixin
        id="movieImage"
        geometry="primitive: plane; width: 0.8; height: 1;"
        material="src: #ponyo; shader: flat; transparent: true"
        position="0 0.495 0.002"
      ></a-mixin>
    </a-assets>

    <a-entity id="mario" position="0 1.6 -2.5">
      <!-- Poster menu -->
        <a-entity 
          id="karigurashiButton" 
          position="-0.8 0 0" 
          mixin="frame" 
          class="raycastable menu-button"
        >
          <a-entity 
            material="src: #karigurashiPoster;" 
            mixin="poster"
          ></a-entity>
        </a-entity>

        <a-entity 
          id="kazetachinuButton" 
          position="0 0 0" 
          mixin="frame" 
          class="raycastable menu-button"
        >
          <a-entity 
            material="src: #kazetachinuPoster" 
            mixin="poster"
          ></a-entity>
        </a-entity>

        <a-entity 
          position="0.8 0 0" 
          mixin="frame" 
        >
          <a-entity 
            material="src: #ponyoPoster" 
            mixin="poster"
          ></a-entity>
        </a-entity>
      </a-entity>
  </a-scene>
</template>