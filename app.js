const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',
            tasks: [],
            isTaskListVisible: true
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredValue);
        },
        toggleTaskList() {
            this.isTaskListVisible = !this.isTaskListVisible;
        }
    }
});

app.mount('#assignment');
