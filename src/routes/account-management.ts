import Account from '@/pages/accounts/Account.vue'
import Add from '@/pages/accounts/AccountWizard.vue'

const rootPath = '/account-management'

export const accountMgmtRoutes = [
  { path: `${rootPath}`, component: Account },
  { path: `${rootPath}/add`, component: Add},
  { path: `${rootPath}/edit/:id`, component: Add},
]