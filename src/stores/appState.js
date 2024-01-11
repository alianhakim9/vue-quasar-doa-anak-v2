import { defineStore } from "pinia";

export const useAppState = defineStore("appState", {
  state: () => ({
    counter: 0,
    showLeftDrawerFlag: true,
    showSearchBar: false,
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
    isShowLeftDrawer() {
      return showLeftDrawerFlag;
    },
    isShowSearchBar(state) {
      return state.showSearchBar;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
    showLeftDrawer() {
      this.showLeftDrawerFlag = true;
    },
    hideLeftDrawer() {
      this.showLeftDrawerFlag = false;
    },
    setShowSearchBar() {
      this.showSearchBar = true;
    },
    hideSearchBar() {
      this.showSearchBar = false;
    },
  },
});
