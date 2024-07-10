import { createApp } from 'vue'
import '../src/style.css'
import router from './router';
import store from './store';
import App from './App.vue'

const baseUrl = 'https://themealdb.com/api/json/v1/1'
const app = createApp(App);

app.use(store);
app.use(router);

app.provide('baseUrl', baseUrl);


app.mount('#app');


