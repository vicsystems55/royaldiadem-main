import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'; // Import the router

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // For all solid icons



library.add(fas); // Add all solid icons to the library

const app = createApp(App);
app.use(router); // Use the router
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');