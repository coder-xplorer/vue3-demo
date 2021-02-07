import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

const app = createApp(App);
app.use(router);
// 路由在挂载之前
app.mount('#app')
