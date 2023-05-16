<template>
  <div 
    v-if="isDesktop"
    :class="{ closed : controls.controlsPopupVisible}"
    class="controls-popup"
  >
    <section 
      class="card-content"
    >
      <div class="card-header">
        <div class="title">
          <Icon 
            name="carbon:chart-3d" 
            size="32"
          />
          <h3>Controls</h3>
        </div>
        <Icon 
          @click="close"
          class="close"
          name="ic:outline-close"
          size="36"
        />
      </div>
      <div class="card-information">
        <div class="card-paragraph">
          <p>Move around with the WASD-keys or the arrow-keys of your keyboard. Look around by draging your mouse over the screen.</p>
        </div>
          <Controls />
      </div>
    </section>
  </div>
  
  <div 
    v-else
    class="mobile-controls"
  >
      <Controls />
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia"
  import { useNavigationMenuStore } from "~/store/navigationMenuStore"
  import { useControlsStore } from "~/store/controlsStore";

  const menu = useNavigationMenuStore();
  const controls = useControlsStore();

  const { hamburgerMenuToggled } = storeToRefs(menu);
  const { controlsPopupVisible } = storeToRefs(controls);


  const { isDesktop } = useDevice();

  function close() {
    controls.controlsPopupVisible = (controls.controlsPopupVisible == true ? false : true);
  }
</script>

<style scoped lang="scss">
.controls-popup{
  z-index: 100;
  position: fixed;
  left: 16px;
  bottom: 16px;;

  // UI
  width: calc(100% - 32px);
  max-width: 500px;
  
  padding: 16px;
  border: 1px solid var(--foreground);
  border-radius: 15px;

  display: flex;

  // Background
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  .card-content{
    width: 100%;

    .card-header{
      display: flex;
      justify-content: space-between;

      .title{
        display: flex;
        gap: 10px;
      }

      .close{
        padding: 4px;
        border-radius: 50%;

        &:hover{
          background-color: #363636;
        }
      }
    }

    .card-information{
      display: flex;
      justify-content: space-between;
      max-width: calc(500px - 32px);

      .card-paragraph{
        display: flex;
        align-items: center;
        flex: 1;

        p{
          margin: 0;
        }
      }

      .card-image{
        max-width: 150px;
        display: flex;
        align-items: center;
        flex: 1;
      }
    }
  }
}

.mobile-controls{
  z-index: 100;
  position: fixed;
  width: calc(100% - 42px);
  left: 16px;
  bottom: 16px;

  display: flex;
  justify-content: center;
}

.closed{
  transform: translateX(-532px);
  transition: .2s ease;
}
</style>