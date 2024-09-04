import Dashboard from '../pages/Dashboard.vue'
import Login from '../pages/auth/Login.vue'
import SignUp from '../pages/auth/SignUp.vue'
import {authRouter} from '../libs/middleware.ts'


export const routes = [
  { path: '/', component: Dashboard, beforeEnter: authRouter },
  { path: '/login', component: Login },
  { path: '/register', component: SignUp}
]