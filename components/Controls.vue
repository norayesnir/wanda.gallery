<script lang="ts">
export default {
  data() {
    return {
      timer: null,
      interval: 10, // set the interval in milliseconds
    }
  },

  methods: {
    handleClick(direction: string) {
      const stepSize = 0.1;
      const entity = document.querySelector('#mario');
      const currentPosition = entity.getAttribute('position');
      const currentRotation = entity.getAttribute('rotation');

      switch (direction) {
        case 'down':
          entity.setAttribute('position', `${currentPosition.x - stepSize * Math.sin(currentRotation.y / 180 * Math.PI)} ${currentPosition.y} ${currentPosition.z - stepSize * Math.cos(currentRotation.y / 180 * Math.PI)}`);
          break;
        case 'up':
          entity.setAttribute('position', `${currentPosition.x + stepSize * Math.sin(currentRotation.y / 180 * Math.PI)} ${currentPosition.y} ${currentPosition.z + stepSize * Math.cos(currentRotation.y / 180 * Math.PI)}`);
          break;
        case 'right':
          entity.setAttribute('position', `${currentPosition.x - stepSize * Math.cos(currentRotation.y / 180 * Math.PI)} ${currentPosition.y} ${currentPosition.z + stepSize * Math.sin(currentRotation.y / 180 * Math.PI)}`);
          break;
        case 'left':
          entity.setAttribute('position', `${currentPosition.x + stepSize * Math.cos(currentRotation.y / 180 * Math.PI)} ${currentPosition.y} ${currentPosition.z - stepSize * Math.sin(currentRotation.y / 180 * Math.PI)}`);
          break;
        default:
          break;
      }
    },

    startTimer(direction: string) {
      this.timer = setInterval(() => {
        this.handleClick(direction);
      }, this.interval);
    },

    stopTimer() {
      clearInterval(this.timer);
    }
  },

  mounted() {
    window.addEventListener('keydown', event => {
      if (event.code.startsWith('Arrow')) {
        const direction = event.code.substring(5).toLowerCase();
        
        this.startTimer(direction);
      }
    });

    window.addEventListener('keyup', event => {
      if (event.code.startsWith('Arrow')) {
        this.stopTimer();
      }
    });
  }
};
</script>

<template>
  <div class="controls">
    <button 
      @mousedown="startTimer('up')" 
      @mouseup="stopTimer()" 

      @touchstart.prevent="startTimer('up')" 
      @touchend.prevent="stopTimer()"
      class="up"
    >
      <Arrow class="arrow" />
    </button>
    <button 
      @mousedown="startTimer('left')" 
      @mouseup="stopTimer()" 

      @touchstart.prevent="startTimer('left')" 
      @touchend.prevent="stopTimer()"
      class="left"
    >
      <Arrow class="arrow" />
    </button>
    <button 
      @mousedown="startTimer('down')" 
      @mouseup="stopTimer()" 

      @touchstart.prevent="startTimer('down')" 
      @touchend.prevent="stopTimer()"
      class="down"
    >
      <Arrow class="arrow" />
    </button>
    <button 
      @mousedown="startTimer('right')" 
      @mouseup="stopTimer()" 

      @touchstart.prevent="startTimer('right')" 
      @touchend.prevent="stopTimer()"
      class="right"
    >
      <Arrow class="arrow" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.controls{
  display: grid;
  gap: 10px;
  grid-template-columns: 45px 45px 45px;
  grid-template-rows: 45px 45px;

  // Disable long-touch/taphold selection
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;

  .up, .left, .down, .right{
    width: 45px;
    height: 45px;
    border: 1px solid var(--background);
    border-radius: 7px;

    // Flex
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #00000000;

    .arrow{
      width: 15px;
      height: 15px;
    }
  }

  .up{
    grid-area: 1 / 2;
  }

  .left{
    grid-area: 2 / 1;

    .arrow{
      rotate: 270deg;
    }
  }

  .down{
    grid-area: 2 / 2;

    .arrow{
      rotate: 180deg;
    }
  }

  .right{
    grid-area: 2 / 3;

    .arrow{
      rotate: 90deg;
    }
  }
}
</style>