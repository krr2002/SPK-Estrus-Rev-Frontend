import Login from '@/pages/auth/Login.vue'
import SignUp from '@/pages/auth/Register.vue'
import Recovery from '@/pages/auth/Recovery.vue'
import ResetPassword from '@/pages/auth/ResetPassword.vue'


export const authRoutes = [
  { path: '/login', component: Login },
  { path: '/register', component: SignUp},
  { path: '/recovery', component: Recovery},
  { path: '/reset-password', component: ResetPassword},
]