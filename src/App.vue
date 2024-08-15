<script setup lang="ts">
  import "./style/main.css"
  import Login from './pages/Login.vue'
  import {ref} from 'vue'
  import Dashboard from './pages/Dashboard.vue'
  import InputVariabel from "./pages/InputVariabel.vue"
  import InputAturan from "./pages/InputAturan.vue"
  import Profil from "./pages/Profil.vue"
  import Admin from "./pages/Admin.vue"
  import Expert from "./pages/Expert.vue"
  import User from "./pages/User.vue"
  import UserProfil from "./pages/UserProfil.vue"
  import UserRiwayat from "./pages/UserRiwayat.vue"
  import UserTernak from "./pages/UserTernak.vue"
  import ExpertBasisAturan from "./pages/ExpertBasisAturan.vue"
  import ExpertParameter from "./pages/ExpertParameter.vue"
  import ExpertReport from "./pages/ExpertReport.vue"
  import ExpertRiwayatKonsultasi from "./pages/ExpertRiwayatKonsultasi.vue"

  const routeName = ref('')

  const changeRoute = (name: string) => {
    routeName.value = name
  }
</script>

<template>
  <main>
    <Dashboard v-if="routeName === 'dashboard'" @goto="(e : any) => changeRoute(e)"/>
    <Admin v-else-if="routeName === 'admin'" @goto="(e : any) => changeRoute(e)"/>
    <Expert v-else-if="routeName === 'expert'" @goto="(e : any) => changeRoute(e)"/>
    <ExpertBasisAturan v-else-if="routeName === 'expert-basis'" @goto="(e : any) => changeRoute(e)"/>
    <ExpertParameter v-else-if="routeName === 'expert-parameter'" @goto="(e : any) => changeRoute(e)"/>
    <ExpertReport v-else-if="routeName === 'expert-report'" @goto="(e : any) => changeRoute(e)"/>
    <ExpertRiwayatKonsultasi v-else-if="routeName === 'expert-riwayat'" @goto="(e : any) => changeRoute(e)"/>
    <User v-else-if="routeName === 'user'" @goto="(e : any) => changeRoute(e)"/>
    <UserTernak v-else-if="routeName === 'user-ternak'" @goto="(e : any) => changeRoute(e)"/>
    <UserRiwayat v-else-if="routeName === 'user-riwayat'" @goto="(e : any) => changeRoute(e)"/>
    <UserProfil v-else-if="routeName === 'user-profil'" @goto="(e : any) => changeRoute(e)"/>
    <InputVariabel v-else-if="routeName === 'input-variabel'" @goto="(e) => changeRoute(e)"/>
    <InputAturan v-else-if="routeName === 'input-aturan'" @goto="(e) => changeRoute(e)"/>
    <Profil v-else-if="routeName === 'profil'" @goto="(e : any) => changeRoute(e)"/>
    <Login v-else @goto="(e) => changeRoute(e)" />
  </main>
</template>
