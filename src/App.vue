<script setup lang="ts">
import { ref } from 'vue';
import Dashboard from './pages/Dashboard.vue';
import InputVariabel from './pages/InputVariabel.vue';
import InputAturan from './pages/InputAturan.vue';
import Profil from './pages/Profil.vue';

const routeName = ref('dashboard'); // Set default route

const changeRoute = (newRoute: string) => {
  routeName.value = newRoute;
};
</script>

<template>
  <main>
    <Dashboard v-if="routeName === 'dashboard'" @goto="changeRoute" />
    <InputVariabel v-if="routeName === 'input-variabel'" @goto="changeRoute" />
    <InputAturan v-if="routeName === 'input-aturan'" @goto="changeRoute" />
    <Profil v-if="routeName === 'profil'" @goto="changeRoute" />
    <!-- If no route matches, show a default page, e.g., a login or error page -->
    <div v-if="routeName === ''" class="text-center mt-10">
      <h1 class="text-3xl font-bold text-gray-900">Please select a page</h1>
    </div>
  </main>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
