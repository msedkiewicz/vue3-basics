const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',
            tasks: [],
            isTaskListVisible: true
        };
    },
    computed: {
        buttonCaption() {
            return this.isTaskListVisible ? 'Hide List' : 'Show List'
        }
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
