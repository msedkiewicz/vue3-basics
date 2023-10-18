const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
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
      console.log('Running again') // checking if function is run again - Vue runs again every function when something changes, even if not connected to it
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmueller';
    }
  }
});

app.mount('#events');
