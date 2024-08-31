<script setup lang="ts">
import { ref, computed } from 'vue';

// Dummy data
const basisAturanData = ref([
  { basis: 'Basis 1', logic: 'Parameter 1 OR Parameter 2 THEN B' },
  { basis: 'Basis 2', logic: 'Parameter 3 AND Parameter 4 THEN C' },
  { basis: 'Basis 3', logic: 'Parameter 5 OR Parameter 6 THEN A' },
  { basis: 'Basis 4', logic: 'Parameter 7 AND Parameter 8 THEN B' },
  { basis: 'Basis 5', logic: 'Parameter 9 OR Parameter 10 THEN D' },
  { basis: 'Basis 6', logic: 'Parameter 11 AND Parameter 12 THEN E' },
  { basis: 'Basis 7', logic: 'Parameter 13 OR Parameter 14 THEN A' },
  { basis: 'Basis 8', logic: 'Parameter 15 AND Parameter 16 THEN C' },
  { basis: 'Basis 9', logic: 'Parameter 17 OR Parameter 18 THEN D' },
  { basis: 'Basis 10', logic: 'Parameter 19 AND Parameter 20 THEN B' },
]);

// Pagination logic
const currentPage = ref(1);
const itemsPerPage = 5; // Adjust number of items per page
const totalPages = computed(() => Math.ceil(basisAturanData.value.length / itemsPerPage));
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return basisAturanData.value.slice(start, end);
});

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const emit = defineEmits();
</script>

<template>
  <div class="w-full min-h-screen bg-gray-100 flex">
    <nav class="bg-sky-800 text-white p-4 flex flex-col space-y-4">
      <button @click="$emit('goto', 'expert')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Dashboard
      </button>
      <button @click="$emit('goto', 'expert-parameter')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Parameter
      </button>
      <button @click="$emit('goto', 'expert-basis')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Basis Aturan
      </button>
      <button @click="$emit('goto', 'expert-riwayat')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Riwayat Konsultasi
      </button>
      <button @click="$emit('goto', 'expert-report')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Report
      </button>
      <button @click="$emit('goto', 'expert-profil')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Profil
      </button>
      <button @click="$emit('goto', '')" class="bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded">
        Keluar
      </button>
    </nav>
    <section class="p-6 flex-1 flex flex-col">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Basis Aturan</h1>
      <!-- Button at the top-right corner of the table -->
      <div class="mb-4 flex justify-end">
        <button @click="$emit('goto', 'expert-add-basis')" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          New
        </button>
      </div>
      <!-- Table with dummy data -->
      <div class="flex-1 overflow-auto">
        <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-gray-100 text-gray-800">
            <tr>
              <th class="p-3 text-left">Basis Aturan</th>
              <th class="p-3 text-left">Logic</th>
              <th class="p-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in paginatedData" :key="index" class="border-b">
              <td class="p-3">{{ item.basis }}</td>
              <td class="p-3">{{ item.logic }}</td>
              <td class="p-3 flex justify-end space-x-2">
                <!-- Action Buttons -->
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Edit
                </button>
                <button class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                  Delete
                </button>
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
  </div>
</template>

<style scoped>
/* Optional scoped styles */
</style>
