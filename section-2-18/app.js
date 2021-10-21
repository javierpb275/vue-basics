let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
    };
  },
  computed: {
    circle_classes() {
      return { purple: this.isPurple };
    },
  },
}).mount("#app");
