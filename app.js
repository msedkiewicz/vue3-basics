const app = Vue.createApp({
    data() {
        return {
            myName: 'Lena',
            myAge: 25,
            imgSunrise: 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/09/epic-sunrise-photos-fog.jpg?fit=1500%2C1001&ssl=1',
        }
    },
    methods: {
        ageInFiveYears() {
            return this.myAge + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');