import { createApp } from "vue"
import "./style/main.css"
import App from "./App.vue"
import {createMemoryHistory, createRouter} from 'vue-router'
import {routes} from './routes/routes'
import {createPinia} from 'pinia'


const router = createRouter({
  history: createMemoryHistory(),
  routes
})
const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount("#app")
