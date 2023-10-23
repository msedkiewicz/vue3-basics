const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullname: '',
      lastname: "",
    };
  },
  watch: {
    // occasional updates - execute code when something (simple) changes
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000); // this sets multiple watchers...
      }
    },
    //   name(value) {
    //     if (value === '') {
    //       this.fullname = '';
    //     } else {
    //       this.fullname = value + ' ' + this.lastname;
    //     } // [problematic with more complex data]
    //   },
    //   lastname(value) {
    //     if (value === '') {
    //       this.fullname = '';
    //     } else {
    //       this.fullname = this.name + ' ' + value;
    //     }
    //   }
  },
  computed: {
    // recalculate when dependency change - outputing dynamic values
    fullname() {
      console.log("Test");
      if (this.name === "" && this.lastname === "") {
        return "";
      }
      return this.name + " " + this.lastname;
    },
  },
  methods: {
    // use only if you want to recalculate values on the page whenever anything change on page + in case of events
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Schwarzmueller";
    },
  },
});

app.mount("#events");
