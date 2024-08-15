<script setup lang="ts">
const emit = defineEmits();
</script>

<template>
  <div class="w-full min-h-screen bg-gray-100 flex">
    <nav class="bg-sky-800 text-white p-4 flex flex-col space-y-4">
      <button @click="$emit('goto', 'admin')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Dashboard
      </button>
      <button @click="$emit('goto', 'admin-akun')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Manajemen Akun
      </button>
      <button @click="$emit('goto', 'admin-ternak')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Manajemen Ternak
      </button>
      <button @click="$emit('goto', 'admin-basis')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Manajemen Basis Aturan
      </button>
      <button @click="$emit('goto', 'admin-riwayat')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Riwayat Konsultasi
      </button>
      <button @click="$emit('goto', 'admin-report')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Report
      </button>
      <button @click="$emit('goto', '')" class="bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded">
        Keluar
      </button>
    </nav>
    <section class="p-6 flex-1">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      <!-- Add your dashboard content here -->
      <p>Selamat datang di Admin Basis!</p>
    </section>
  </div>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
