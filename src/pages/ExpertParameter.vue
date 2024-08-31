<script setup lang="ts">
import { ref } from 'vue';

// Dummy data
const parameters = ref([
  { name: 'Parameter 1', values: ['hangat', 'dingin'] },
  { name: 'Parameter 2', values: ['panas', 'dingin'] },
  { name: 'Parameter 3', values: ['tinggi', 'rendah'] },
]);


// Function to handle the edit button click
const editParameter = (index: number) => {
  console.log('Edit Parameter at index', index);
};

// Function to handle the delete button click
const deleteParameter = (index: number) => {
  parameters.value.splice(index, 1);
};
</script>

<template>
  <div class="w-full min-h-screen bg-gray-100 flex">
    <nav class="bg-sky-800 text-white p-4 flex flex-col space-y-4">
      <button @click="$emit('goto', 'expert')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Dashboard
      </button>
      <button @click="$emit('goto', 'expert-parameter')" class="bg-sky-900 hover:bg-sky-800 transition-colors px-4 py-2 rounded">
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
    <section class="p-6 flex-1">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Parameter</h1>
      <!-- New button at the top-right corner of the table -->
      <div class="mb-4 flex justify-end">
        <button @click="$emit('goto', 'expert-add-param')" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          New
        </button>
      </div>
      <!-- Table with dummy data -->
      <div class="flex-1 overflow-auto">
        <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-gray-100 text-gray-800">
            <tr>
              <th class="p-3 text-left">Parameter</th>
              <th class="p-3 text-left">Value</th>
              <th class="p-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(parameter, index) in parameters" :key="index" class="border-b">
              <td class="p-3">{{ parameter.name }}</td>
              <td class="p-3">
                <ul>
                  <li v-for="(value, idx) in parameter.values" :key="idx">{{ value }}</li>
                </ul>
              </td>
              <td class="p-3 flex justify-end space-x-2">
                <button @click="editParameter(index)" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Edit
                </button>
                <button @click="deleteParameter(index)" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </td>
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
