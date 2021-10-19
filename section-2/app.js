const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
}).mount("#app");

setTimeout(() => {
  vm.firstName = "Bob";
}, 2000);
