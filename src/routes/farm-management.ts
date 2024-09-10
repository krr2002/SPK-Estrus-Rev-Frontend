import Add from '@/pages/farm/FarmWizard.vue'
import Farm from '@/pages/farm/Farm.vue'

const rootPath = '/farm-management'

export const farmMgmtRoutes = [
  { path: `${rootPath}`, component: Farm },
  { path: `${rootPath}/add`, component: Add},
]