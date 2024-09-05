import Dashboard from '../pages/Dashboard.vue'
import Report from '../pages/Report.vue'
import Account from '../pages/accounts/Account.vue'
import {authRouter} from '../libs/middleware.ts'
import {authRoutes} from './auth.ts'


export const routes = [
  { path: '/', component: Dashboard, beforeEnter: authRouter },
  { path: '/report', component: Report, beforeEnter: authRouter },
  { path: '/account-management', component: Account, beforeEnter: authRouter },
  ...authRoutes
]