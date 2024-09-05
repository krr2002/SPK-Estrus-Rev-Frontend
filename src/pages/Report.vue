<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue'


const emit = defineEmits();
</script>

<template>
  <main class="w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <section class="p-6 flex-1">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      <!-- Add your dashboard content here -->
      <p>Selamat datang di Admin Report!</p>
    </section>
  </main>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
