const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet!";
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    addNumber(value) {
      this.counter = this.counter + value;
    //   console.log(this.counter);
    },
  },
});

app.mount("#assignment");
