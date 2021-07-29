import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import BaseButton from './components/ui/BaseButton.vue';

// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App)

app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.component('base-button', BaseButton);
app.mount('#app');
