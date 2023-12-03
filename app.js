const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',
            tasks: []
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredValue);
            console.log(this.tasks);
        }
    }
});

app.mount('#assignment');
