<script setup lang="ts">
import { ref } from 'vue';

const query = gql`
  query {
    artworks(per_page: 10, page: 1) {
      data {
        id
        title
        description
        date
        url
        room_id
      }
    }
  }
`;

const { data, error, refresh } = useAsyncQuery(query);

const numEntities = 10;
const radius = 20;
const circleCenterPosition = { x: 0, y: 2, z: 0 };
const entities = ref<Entity[]>([]);

interface Entity {
  position: string;
  rotation: string;
  text: string;
}

const positionEntitiesInCircle = () => {
  const angleIncrement = (2 * Math.PI) / numEntities;

  for (let i = 0; i < numEntities; i++) {
    const angle = i * angleIncrement;
    const x = circleCenterPosition.x + radius * Math.cos(angle);
    const y = circleCenterPosition.y;
    const z = circleCenterPosition.z + radius * Math.sin(angle);

    const rotationAngle = Math.atan2(circleCenterPosition.x - x, circleCenterPosition.z - z) * (180 / Math.PI);
    const rotation = `0 ${rotationAngle} 0`;

    const entity: Entity = {
      position: `${x} ${y} ${z}`,
      rotation: rotation,
      text: `Entity${i + 1}`
    };

    entities.value.push(entity);
  }
};

positionEntitiesInCircle();

// Convert to kebab-case
const kebabCase = (str: { match: (arg0: RegExp) => any[]; }) => str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toLowerCase();
</script>


<template>
  <a-scene 
    loading-screen="backgroundColor: black; dotsColor: white;"
    vr-mode-ui="enabled: false"
  >
  
    <a-assets>
      <img
        v-for="(artwork, index) in data.artworks.data"
        :id="kebabCase(artwork.title)"
        :src="artwork.url"
        crossorigin="anonymous"
      >
    </a-assets>

    <!-- Scene -->
    <a-entity id="mario">
      <a-entity
        v-for="(artwork, index) in data.artworks.data" 
        :key="artwork.id" 
        :position="entities[index].position" 
        :rotation="entities[index].rotation"
      >

        <a-image 
          src="androids/adran-engineered-arts-uk-wanda-tuerlinckx.webp"
          :alt="kebabCase(artwork.title)"
          :id="kebabCase(artwork.title)"
          width="1.6" 
          height="2"
        ></a-image>

        <!-- <a-entity
          geometry="primitive: plane; height: 2; width: 1.6;"
          :material="'src: #' + entities[index].text"
          :src="artwork.url"
          mixin="poster"
        ></a-entity> -->

        <a-text 
          class="title"
          width="7"
          baseline="bottom"
          position="1 .7 0"
          :value="artwork.title"
        ></a-text>
        <a-text 
          class="description"
          baseline="top"
          position="1 .5 0"
          :value="`${artwork.description}`"
        ></a-text>
      </a-entity>
    </a-entity>
  </a-scene>
</template>
