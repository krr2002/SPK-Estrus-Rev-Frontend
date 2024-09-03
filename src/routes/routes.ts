import Dashboard from '../pages/Dashboard.vue'
import Login from '../pages/Login.vue'
import SignUp from '../pages/SignUp.vue'
import {authRouter} from '../libs/middleware.ts'


export const routes = [
  { path: '/', component: Dashboard, beforeEnter: authRouter },
  { path: '/login', component: Login },
  { path: '/register', component: SignUp}
]