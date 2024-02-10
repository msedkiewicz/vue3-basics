const app = Vue.createApp({
  // first template of Vue app
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmount() {
    console.log("unmount()");
  },
});

app.mount("#app");

setTimeout(function () {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  // second template of Vue app
  template: `<p>{{ favoriteMeal }}</p>`,
  data() {
    return {
      favoriteMeal: "lasagna",
    };
  },
});
app2.mount("#app2");
