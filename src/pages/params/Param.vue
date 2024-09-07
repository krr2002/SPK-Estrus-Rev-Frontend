<script setup lang="ts">
  import { ref } from 'vue';
  import Sidebar from '@/components/Sidebar.vue'


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
  <main class="w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <section class="p-6 flex-1">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Parameter</h1>
      <!-- New button at the top-right corner of the table -->
      <div class="mb-4 flex justify-end">
        <button @click="$emit('goto', 'admin-add-param')" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          New
        </button>
      </div>
      <!-- Table with dummy data -->
      <div class="flex-1 overflow-auto">
        <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-gray-100 text-gray-800">
            <tr>
              <th class="p-3 text-left">Parameter</th>
              <th class="p-3 text-left">Linguistik (Nilai minimum)</th>
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
  </main>
</template>

<style scoped>
/* Optional scoped styles */
</style>
