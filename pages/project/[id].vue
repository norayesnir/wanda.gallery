<script setup lang="ts">
import { useRoute } from 'vue-router';
import { gql } from '@apollo/client/core';

const route = useRoute();
let categoryId: number | undefined;

if (Array.isArray(route.params.id)) {
  categoryId = parseInt(route.params.id[0]);
} else {
  categoryId = parseInt(route.params.id);
}

interface Room {
  id: number;
  title: string;
  intro: string;
  cover_url: string;
}

interface Categories {
  title: string;
}

interface RoomData {
  rooms: {
    data: Room[];
  };
  categories: {
    data: Categories [];
  };
}

const query = gql`
  query($categoryId: Int!) {
    rooms(category_id: $categoryId) {
      data {
        id
        title
        intro
        cover_url
      }
    }
    categories {
      data {
        title
      }
    }
  }
`;
const { data, refresh } = useAsyncQuery<RoomData>(query, { categoryId });
</script>

<template>
  <div class="page">
    <div
      class="room-selection"
      v-if="data && data.rooms && data.rooms.data"
    >
      <div 
        class="room"
        v-for="(room, id) in data.rooms.data" :key="id"
      >
        <img 
          class="image" 
          :src="room.cover_url" 
          :alt="room.cover_url"
        >
        <div class="content">
          <h3>{{ room.title }}</h3>
          <p>{{ room.intro }}</p>
          <TemplateButton name="View this project" :to="`rooms/${room.id}`"/>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.page{
  min-height: 100vh;
}
.room-selection{
  width: 100%;
  display: flex;
  gap: 64px;
  justify-self: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 48px;

  .room{
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
  .room-selection{
    flex-direction: row;
    justify-content: space-between;

    .room{
      position: relative;
      flex-direction: column;
      max-width: 400px;
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
  }
}
</style>
