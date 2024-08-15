<script setup lang="ts">
import { ref } from 'vue';

// State untuk menyimpan parameter dan inputannya
const parameterName = ref('');
const parameterValues = ref<string[]>([]);

// Fungsi untuk menambahkan parameter dan nilai-nilainya
const addParameter = () => {
  if (parameterName.value && parameterValues.value.length > 0) {
    // Tambahkan parameter dan nilai-nilainya ke database atau state global
    console.log('Parameter:', parameterName.value);
    console.log('Values:', parameterValues.value);
    
    // Reset input
    parameterName.value = '';
    parameterValues.value = [];
  }
};

// Fungsi untuk menambah inputan nilai
const addValueInput = () => {
  parameterValues.value.push('');
};
</script>

<template>
  <div class="w-full min-h-screen bg-gray-100 flex">
    <nav class="bg-sky-800 text-white p-4 flex flex-col space-y-4">
      <button @click="$emit('goto', 'dashboard')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
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
      <button @click="$emit('goto', '')" class="bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded">
        Keluar
      </button>
    </nav>
    <section class="p-6 flex-1">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Input Parameter</h1>
      <form @submit.prevent="addParameter" class="space-y-4">
        <div>
          <label class="block text-gray-700">Parameter Name:</label>
          <input v-model="parameterName" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>
        <div>
          <label class="block text-gray-700">Values:</label>
          <div v-for="(value, index) in parameterValues" :key="index" class="flex items-center space-x-2 mb-2">
            <input v-model="parameterValues[index]" type="text" class="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
            <button type="button" @click="parameterValues.splice(index, 1)" class="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded">Remove</button>
          </div>
          <button type="button" @click="addValueInput" class="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded">Add Value</button>
        </div>
        <button type="submit" class="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
