<script setup lang="ts">
  import { ref, computed } from 'vue'
  import Sidebar from '@/components/Sidebar.vue'

  // Dummy data
  const ternakData = ref([
    { nama: 'Sapi A', umur: '2 tahun', status: 'Sehat' },
    { nama: 'Sapi B', umur: '1 tahun', status: 'Sakit' },
    { nama: 'Sapi C', umur: '3 tahun', status: 'Sehat' },
    { nama: 'Sapi D', umur: '1,5 tahun', status: 'Sehat' },
    { nama: 'Sapi E', umur: '2 tahun', status: 'Sakit' },
    { nama: 'Sapi F', umur: '2,5 tahun', status: 'Sehat' },
    { nama: 'Sapi G', umur: '3 tahun', status: 'Sehat' },
    { nama: 'Sapi H', umur: '1 tahun', status: 'Sehat' },
    { nama: 'Sapi I', umur: '2 tahun', status: 'Sehat' },
    { nama: 'Sapi J', umur: '1 tahun', status: 'Sehat' },
    { nama: 'Sapi K', umur: '2 tahun', status: 'Sehat' },
    { nama: 'Sapi L', umur: '1,5 tahun', status: 'Sakit' },
  ])

  // Pagination logic
  const currentPage = ref(1)
  const itemsPerPage = 6 // Updated to 6
  const totalPages = computed(() => Math.ceil(ternakData.value.length / itemsPerPage))
  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return ternakData.value.slice(start, end)
  })

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  const emit = defineEmits()
</script>

<template>
  <main class="w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <section class="p-6 flex-1 flex flex-col">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <!-- Buttons at the top-right corner of the table -->
      <div class="mb-4 flex justify-end space-x-2">
        <button @click="$emit('goto', 'user-add-ternak')" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          New
        </button>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Cetak
        </button>
      </div>
      <!-- Table with dummy data -->
      <div class="flex-1 overflow-auto">
        <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-gray-100 text-gray-800">
          <tr>
            <th class="p-3 text-left">Nama</th>
            <th class="p-3 text-left">Umur</th>
            <th class="p-3 text-left">Status</th>
            <th class="p-3 text-left"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(ternak, index) in paginatedData" :key="index" class="border-b">
            <td class="p-3">{{ ternak.nama }}</td>
            <td class="p-3">{{ ternak.umur }}</td>
            <td class="p-3">{{ ternak.status }}</td>
            <td class="p-3 flex justify-end">
              <!-- Actions Buttons -->
              <div class="flex space-x-2">
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Edit
                </button>
                <button class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- Pagination controls -->
      <div class="mt-4 flex justify-center space-x-2">
        <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            :class="['px-4 py-2 rounded', { 'bg-sky-800 text-white': currentPage === page, 'bg-gray-200 text-gray-800': currentPage !== page }]"
        >
          {{ page }}
        </button>
      </div>
    </section>
  </main>
</template>
