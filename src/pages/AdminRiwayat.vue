<script setup lang="ts">
import { ref } from 'vue';

// Dummy data for consultation history
const history = ref([
  { name: 'John Doe', role: 'User', activity: 'Consultation', time: '2024-08-30 10:00' },
  { name: 'Jane Smith', role: 'Expert', activity: 'Consultation', time: '2024-08-30 11:00' },
  { name: 'Alice Johnson', role: 'User', activity: 'Consultation', time: '2024-08-30 12:00' },
  { name: 'Bob Brown', role: 'Expert', activity: 'Consultation', time: '2024-08-30 13:00' },
]);


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
      <button @click="$emit('goto', 'admin-param')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Manajemen Parameter
      </button>
      <button @click="$emit('goto', 'admin-basis')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Manajemen Basis Aturan
      </button>
      <button @click="$emit('goto', 'admin-riwayat')" class="bg-sky-900 hover:bg-sky-800 transition-colors px-4 py-2 rounded">
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
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Riwayat Konsultasi</h1>
      <!-- Table with dummy data -->
      <div class="flex-1 overflow-auto">
        <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-gray-100 text-gray-800">
            <tr>
              <th class="p-3 text-left">Nama Akun</th>
              <th class="p-3 text-left">Role</th>
              <th class="p-3 text-left">Aktifitas</th>
              <th class="p-3 text-left">Waktu Aktifitas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in history" :key="index" class="border-b">
              <td class="p-3">{{ item.name }}</td>
              <td class="p-3">{{ item.role }}</td>
              <td class="p-3">{{ item.activity }}</td>
              <td class="p-3">{{ item.time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Optional scoped styles */
</style>
