import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import {createPinia} from 'pinia';

const app = createApp(App)
const pinia = createPinia();

app.use(Vue3Toasity, {autoClose: 5000, theme: "colored", hideProgressBar: true})
app.use(router)
app.use(pinia)

app.mount('#app')
