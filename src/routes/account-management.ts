import Account from '@/pages/accounts/Account.vue'
import Add from '@/pages/accounts/AddAccount.vue'

const rootPath = '/account-management'

export const accountMgmtRoutes = [
  { path: `${rootPath}`, component: Account },
  { path: `${rootPath}/add`, component: Add},
]