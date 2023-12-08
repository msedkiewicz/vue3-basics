// const app = Vue.createApp({
//   data() {
//     return {
//       currentUserInput: '',
//       message: 'Vue is great!',
//     };
//   },
//   methods: {
//     saveInput(event) {
//       this.currentUserInput = event.target.value;
//     },
//     setText() {
//       this.message = this.currentUserInput;
//     },
//   },
// });

// app.mount('#app');

// vanilla JS is not reactive by default

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + 'World!';
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'Helloooo!!!!';

console.log(proxy.longMessage);