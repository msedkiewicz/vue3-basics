const app = Vue.createApp({
  data() {
    return {
      inputOne: "",
      confirmedInputOne: "",
      inputTwo: "",
      confirmedInputTwo: "",
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
    setInputTwo(event) {
      this.inputTwo = event.target.value;
    },
    confirmInputTwo() {
      this.confirmedInputTwo = this.inputTwo;
    },
  },
});

app.mount("#assignment");
