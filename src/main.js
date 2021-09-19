import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './main.css'
import './bootstrap.min'

createApp(App).use(router).mount('#app')
