<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { gql } from '@apollo/client/core';

const route = useRoute();
let roomId: number | undefined;

if (Array.isArray(route.params.id)) {
  roomId = parseInt(route.params.id[0]);
} else {
  roomId = parseInt(route.params.id);
}

interface Artwork {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
  room_id: number;
  sound: string;
}

interface Room {
  color: string;
  background_url: string;
  sound: string;
}

interface CollectedData {
  artworks: {
    data: Artwork[];
  },
  room: Room;
}

const query = gql`
  query($roomId: Int!) {
    artworks(room_id: $roomId, per_page: 10) {
      data {
        id
        title
        description
        date
        url
        room_id
        sound
      }
    },
    room (id: $roomId) {
      color
      background_url
      sound
    }
  }
`;

const { data, refresh } = useAsyncQuery<CollectedData>(query, { roomId });

const numEntities = 10;
const radius = 30;
const circleCenterPosition = { x: 0, y: 0, z: 0 };
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
</script>

<template>
  <a-scene 
    class="a-scene"
    loading-screen="backgroundColor: black; dotsColor: white;"
    :background="`color: ${data.room.color}`"
    vr-mode-ui="enabled: false"
    v-if="data && data.artworks && data.artworks.data"
  >

    <a-entity 
      :sound="`src: url(${data.room.sound}); autoplay: true;`" 
      id="ambient-room-sound"
    ></a-entity>
    <a-sky :src="data.room.background_url"></a-sky>
  
    <a-assets>
      <img
        v-for="(artwork, id) in data.artworks.data" :key="id"
        :src="artwork.url"
        crossorigin="anonymous"
      >
    </a-assets>

    <a-entity id="mario">

      <a-entity
        v-for="(artwork, index) in data.artworks.data" 
        :key="artwork.id" 
        :position="entities[index].position" 
        :rotation="entities[index].rotation"
      >
        <a-box
          geometry="primitive: box" 
          material="color: black"
          position="0 4 -0.26"
          depth="0.5"
          width="7"
          height="12"
        >

        </a-box>
        <a-image 
          :id="artwork.id"
          :src="artwork.url"
          width="6.4" 
          height="8"
          position="0 5.5 0"
        ></a-image>

        <a-text 
          class="title"
          width="7"
          baseline="bottom"
          position="-2.9 .7 0"
          :value="artwork.title"
        ></a-text>
        <a-text 
          class="description"
          baseline="top"
          position="-2.9 .5 0"
          :value="artwork.description"
        ></a-text>
        <a-entity 
          :sound="`src: url(${artwork.sound}); autoplay: true;`" 
          id="ambient-artwork-sound"
        ></a-entity>
      </a-entity>
    </a-entity>
  </a-scene>
</template>
