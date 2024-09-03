import { createApp } from "vue";
import "./style/main.css"
import App from "./App.vue";
import {createMemoryHistory, createRouter} from 'vue-router'
import {routes} from './routes/routes'

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount("#app");
