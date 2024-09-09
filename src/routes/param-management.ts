import Param from '@/pages/params/Param.vue'
import ParamWizard from '@/pages/params/ParamWizard.vue'


const rootPath = '/param-management'

export const paramMgmtRoutes = [
  { path: `${rootPath}`, component: Param },
  { path: `${rootPath}/add`, component: ParamWizard},
  { path: `${rootPath}/edit/:id`, component: ParamWizard},
]