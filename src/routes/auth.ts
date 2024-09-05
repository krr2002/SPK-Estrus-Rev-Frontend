import Login from '@/pages/auth/Login.vue'
import SignUp from '@/pages/auth/SignUp.vue'


export const authRoutes = [
  { path: '/login', component: Login },
  { path: '/register', component: SignUp},
]