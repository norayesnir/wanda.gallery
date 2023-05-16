import { defineStore } from "pinia";
export const useNavigationMenuStore = defineStore("main", {
  state: ()=> ({
    hamburgerMenuToggled: false,
  })
})