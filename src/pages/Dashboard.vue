<script setup lang="ts">
  
</script>

<template>
  <div class="w-full min-h-screen bg-gray-100">
    <nav class="bg-sky-800 text-white p-4 flex justify-end items-center space-x-4">
      <button
        @click="() => $emit('goto', 'input-variabel')"
        class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Input Variabel
      </button>
      <button
        @click="() => $emit('goto', 'input-aturan')"
        class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Input Aturan
      </button>
      <button
        @click="() => $emit('goto', 'profil')"
        class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Profil
      </button>
      <button
        @click="() => navigateTo('')"
        class="bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded">
        Keluar
      </button>
    </nav>
    <section class="p-6">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
        <!-- Add your dashboard content here -->
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
