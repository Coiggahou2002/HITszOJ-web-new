import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router";
import '@/config/interceptor.js'
import store from "@/store";

import "@/mock/index.js";

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import 'virtual:windi.css';
import '@/styles/main.scss';

import 'bootstrap-icons/font/bootstrap-icons.scss'

// override styles of el-message
import '@/styles/el-message-override.scss';


const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)

app.mount('#app')

export default app;