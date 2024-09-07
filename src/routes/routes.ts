import Dashboard from '@/pages/Dashboard.vue'
import Report from '@/pages/Report.vue'
import History from '@/pages/History.vue'
import {authRouter} from '@/libs/middleware.ts'
import {authRoutes} from './auth.ts'
import {accountMgmtRoutes} from '@/routes/account-management.ts'
import {farmMgmtRoutes} from '@/routes/farm-management.ts'
import {paramMgmtRoutes} from '@/routes/param-management.ts'


export const routes = [
  { path: '/', component: Dashboard, beforeEnter: authRouter },
  { path: '/report', component: Report, beforeEnter: authRouter },
  { path: '/activity', component: History, beforeEnter: authRouter },
  ...authRoutes,
  ...accountMgmtRoutes,
  ...farmMgmtRoutes,
  ...paramMgmtRoutes,
]