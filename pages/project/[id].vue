<script setup lang="ts">
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

interface RoomData {
rooms: RoomData;
  data: Room[];
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
  }
`;

const { data, error, refresh } = useAsyncQuery<RoomData>(query, { categoryId })
</script>

<template>
  <div>
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
  </div>
</template>

<style scoped lang="scss">
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
          font-size: 24px;
          margin: 0;
        }
      }
    }
  }
}
</style>