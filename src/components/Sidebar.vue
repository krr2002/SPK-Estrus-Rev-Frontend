<script setup lang="ts">
  import {AuthToken} from '../utils/auth.ts'
  import {useRouter} from 'vue-router'
  import {onMounted, reactive, ref} from 'vue'


  const router = useRouter()
  const logout = () => {
    AuthToken.del()
    return router.push('/login')
  }

  const navList = ref([
    {text: 'Dashboard', routePath: '/', accessGroup: ['USER', 'ADMIN', 'EXPERT']},
    {text: 'Manajemen Akun', routePath: '/account-management', accessGroup: ['ADMIN']},
    {text: 'Manajemen Ternak', routePath: '/farm-management', accessGroup: ['ADMIN', 'EXPERT']},
    {text: 'Manajemen Parameter', routePath: '/param-management', accessGroup: ['ADMIN', 'EXPERT']},
    {text: 'Manajemen Basis Aturan', routePath: '/rule-management', accessGroup: ['ADMIN', 'EXPERT']},
    {text: 'Riwayat Konsultasi', routePath: '/dss-history', accessGroup: ['USER', 'ADMIN', 'EXPERT']},
    {text: 'Report', routePath: '/report', accessGroup: ['USER', 'ADMIN', 'EXPERT']},
  ])

  onMounted(() => {
    navList.value= navList.value.filter((nav) => {
      return nav.accessGroup.includes(AuthToken.getData('roleName'))
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