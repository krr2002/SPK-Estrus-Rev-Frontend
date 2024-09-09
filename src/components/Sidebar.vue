<script setup lang="ts">
  import {AuthToken} from '../utils/auth.ts'
  import {useRouter} from 'vue-router'
  import {onMounted, ref} from 'vue'
  import {ROLE_ADMIN, ROLE_EXPERT, ROLE_USER} from '@/libs/const.ts'


  const router = useRouter()
  const logout = () => {
    AuthToken.del()
    return router.push('/login')
  }

  const navList = ref([
    {text: 'Dashboard', routePath: '/', accessGroup: [ROLE_USER, ROLE_ADMIN, ROLE_EXPERT]},
    {text: 'Manajemen Akun', routePath: '/account-management', accessGroup: [ROLE_ADMIN]},
    {text: 'Manajemen Ternak', routePath: '/farm-management', accessGroup: [ROLE_USER, ROLE_ADMIN, ROLE_EXPERT]},
    {text: 'Manajemen Parameter', routePath: '/param-management', accessGroup: [ROLE_ADMIN, ROLE_EXPERT]},
    {text: 'Manajemen Basis Aturan', routePath: '/rule-management', accessGroup: [ROLE_ADMIN, ROLE_EXPERT]},
    // {text: 'Riwayat Aktifitas', routePath: '/activity', accessGroup: [ROLE_USER, ROLE_ADMIN, ROLE_EXPERT]},
    // {text: 'Report', routePath: '/report', accessGroup: [ROLE_USER, ROLE_ADMIN, ROLE_EXPERT]},
  ])

  onMounted(() => {
    navList.value= navList.value.filter((nav) => {
      return nav.accessGroup.includes(AuthToken.getData('roleId').toLowerCase().replaceAll('-', ''))
    })
  })
</script>

<template>
  <nav class="bg-sky-800 text-white p-4 flex flex-col space-y-4">
    <RouterLink v-for="item in navList" :to="item.routePath" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded text-center">
      {{ item.text }}
    </RouterLink>
    <button @click="logout" class="bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded">
      Keluar
    </button>
  </nav>
</template>

<style scoped>

</style>