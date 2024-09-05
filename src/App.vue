<script setup lang="ts">
  import "./style/main.css"
</script>

<template>
  <RouterView/>
<!--    <Dashboard v-if="routeName === 'dashboard'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <Admin v-else-if="routeName === 'admin'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <AdminTernak v-else-if="routeName === 'admin-ternak'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <AdminParam v-else-if="routeName === 'admin-param'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <AdminBasis v-else-if="routeName === 'admin-basis'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <AdminRiwayat v-else-if="routeName === 'admin-riwayat'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <AdminReport v-else-if="routeName === 'admin-report'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <AdminAkun v-else-if="routeName === 'admin-akun'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <AdminAddAkun v-else-if="routeName === 'admin-add-akun'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <AdminAddBasis v-else-if="routeName === 'admin-add-basis'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <AdminAddParam v-else-if="routeName === 'admin-add-param'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <AdminAddTernak v-else-if="routeName === 'admin-add-ternak'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <Expert v-else-if="routeName === 'expert'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <ExpertBasisAturan v-else-if="routeName === 'expert-basis'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <ExpertParameter v-else-if="routeName === 'expert-parameter'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <ExpertReport v-else-if="routeName === 'expert-report'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <ExpertRiwayatKonsultasi v-else-if="routeName === 'expert-riwayat'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <ExpertProfil v-else-if="routeName === 'expert-profil'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <ExpertAddParam v-else-if="routeName === 'expert-add-param'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <ExpertAddBasis v-else-if="routeName === 'expert-add-basis'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <User v-else-if="routeName === 'user'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <UserTernak v-else-if="routeName === 'user-ternak'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <UserRiwayat v-else-if="routeName === 'user-riwayat'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <UserProfil v-else-if="routeName === 'user-profil'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <UserAddTernak v-else-if="routeName === 'user-add-ternak'" @goto="(e : any) => changeRoute(e)"/>-->
<!--    <InputVariabel v-else-if="routeName === 'input-variabel'" @goto="(e) => changeRoute(e)"/>-->
<!--    <InputAturan v-else-if="routeName === 'input-aturan'" @goto="(e) => changeRoute(e)"/>-->
<!--    <ForgotPassword v-else-if="routeName === 'forgot-password'" @goto="(e) => changeRoute(e)"/>-->
<!--    <Profil v-else-if="routeName === 'profil'" @goto="(e : any) => changeRoute(e)"/>-->
</template>
