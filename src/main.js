import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const app = createApp(App).use(router)

// 这里设置你 Typecho 部署的地址，带端口也行
app.config.globalProperties.backend = 'api.erohub.org'

app.mount('#app')

