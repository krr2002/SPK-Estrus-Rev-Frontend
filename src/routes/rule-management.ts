import Rule from '@/pages/rule/Rule.vue'
import RuleWizard from '@/pages/rule/RuleWizard.vue'


const rootPath = '/rule-management'

export const ruleMgmtRoutes = [
  { path: `${rootPath}`, component: Rule },
  { path: `${rootPath}/add`, component: RuleWizard},
  { path: `${rootPath}/edit/:id`, component: RuleWizard},
]