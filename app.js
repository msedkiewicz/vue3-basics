const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: { // recalculate when dependency change
    fullName() {
      console.log('Test')
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmueller';
    }
  },
  methods: { // use only if you want to recalculate values on the page whenever anything change on page + in case of events
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
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmueller';
    }
  }
});

app.mount('#events');
