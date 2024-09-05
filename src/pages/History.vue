<script setup lang="ts">
import { ref } from 'vue';
  import Sidebar from '@/components/Sidebar.vue'

  // Dummy activity data
  const activities = ref([
    { action: 'Menambah data ternak', timestamp: '2024-08-30 10:30' },
    { action: 'Mengedit data ternak', timestamp: '2024-08-30 11:00' },
    { action: 'Menghapus data ternak', timestamp: '2024-08-30 11:30' },
    { action: 'Menambah data ternak', timestamp: '2024-08-29 09:00' },
    { action: 'Mengedit data ternak', timestamp: '2024-08-29 09:30' },
    // Add more dummy data as needed
  ])
</script>

<template>
  <div class="w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <section class="p-6 flex-1">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Riwayat Aktifitas</h1>
      <!-- Table displaying user activities -->
      <div class="flex-1 overflow-auto">
        <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-gray-100 text-gray-800">
            <tr>
              <th class="p-3 text-left">Aktifitas</th>
              <th class="p-3 text-left">Waktu</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(activity, index) in activities" :key="index" class="border-b">
              <td class="p-3">{{ activity.action }}</td>
              <td class="p-3">{{ activity.timestamp }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
