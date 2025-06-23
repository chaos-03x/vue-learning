// 引入createApp创建应用
import { createApp } from 'vue'
// 引入根组件
import App from './App.vue'
// 引入路由器
import router from './router/index.ts'

// 创建应用
const app = createApp(App)
// 使用路由器
app.use(router)
// 挂载应用到html的app容器
app.mount('#app')