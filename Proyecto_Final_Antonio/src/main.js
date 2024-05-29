import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"; // Import the CSS or use your own!
const options = {
    // You can set your default options here
    maxToasts: 1,
    position: "bottom-right",
};

// import Atropos component
import AtroposComponent from 'atropos/element';
// register Atropos component
customElements.define('atropos-component', AtroposComponent);


createApp(App).use(store).use(router).use(Toast, options).use(axios).mount('#app')
