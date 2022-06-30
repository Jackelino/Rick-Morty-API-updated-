import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './assets/scss/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const app = createApp(App);
    app.use(store)
    app.mount('#app')
