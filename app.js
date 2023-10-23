const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addNumber(value) {
      this.counter = this.counter + value;
    },
  },
});

app.mount("#assignment");
