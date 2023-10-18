const app = Vue.createApp({
  data() {
    return {
      inputOne: "",
      confirmedInputOne: "",
    };
  },
  methods: {
    buttonClick() {
      alert("Howdy!");
    },
    setInputOne(event) {
      this.inputOne = event.target.value;
    },
    confirmInputOne() {
      this.confirmedInputOne = this.inputOne;
    },
  },
});

app.mount("#assignment");
