import { defineStore } from "pinia";
export const useControlsStore = defineStore("main", {
  state: ()=> ({
    controlsPopupVisible: false,
  })
})