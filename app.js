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

let message = 'Hello!';

let longMessage = message + ' World!';

console.log(longMessage);

message = 'Hello';

console.log(longMessage);