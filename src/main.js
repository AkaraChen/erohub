import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './tabler.css'
import './tabler'

createApp(App).use(router).mount('#app')
