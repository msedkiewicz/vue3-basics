const app = Vue.createApp({
  data() {
    return {
      inputOne: "",
    };
  },
  methods: {
    buttonClick() {
      alert("Howdy!");
    },
    setInputOne(event) {
      this.inputOne = event.target.value;
    },
  },
});

app.mount("#assignment");
