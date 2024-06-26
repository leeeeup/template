import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import i18n from './language';
const app = createApp(App);

app.use(i18n).mount('#app');
