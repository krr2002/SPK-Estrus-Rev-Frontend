<script setup lang="ts">
  import "./style/main.css"
  import Login from './pages/Login.vue'
  import {ref} from 'vue'
  import Dashboard from './pages/Dashboard.vue'
  import InputVariabel from "./pages/InputVariabel.vue"

  const routeName = ref('')

  const changeRoute = (name: string) => {
    routeName.value = name
  }
</script>

<template>
  <main>
    <Dashboard v-if="routeName === 'dashboard'" @goto="(e) => changeRoute(e)"/>
    <InputVariabel v-if="routeName === 'input-variabel'" @goto="(e) => changeRoute(e)"/>
    <Login v-else @goto="(e) => changeRoute(e)" />
  </main>
</template>
