<script setup lang="ts">
import { ref } from 'vue';

// State for cattle data
const namaSapi = ref('');
const umurSapi = ref('');

// Function to handle form submission
const addCattle = () => {
  if (namaSapi.value && umurSapi.value) {
    // Handle adding the cattle data (e.g., saving to a database or state)
    console.log('Nama Sapi:', namaSapi.value);
    console.log('Umur Sapi:', umurSapi.value);

    // Reset form
    namaSapi.value = '';
    umurSapi.value = '';
  }
};

// Function to handle navigation
const emit = defineEmits<{
  (e: 'goto', route: string): void;
}>();
</script>

<template>
  <div class="w-full min-h-screen bg-gray-100 flex">
    <nav class="bg-sky-800 text-white p-4 flex flex-col space-y-4">
      <button @click="$emit('goto', 'admin')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Dashboard
      </button>
      <button @click="$emit('goto', 'admin-akun')" class="bg-sky-900 hover:bg-sky-800 transition-colors px-4 py-2 rounded">
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
    <section class="p-6 flex-1 flex flex-col">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Add Ternak</h1>
      <form @submit.prevent="addCattle" class="space-y-4">
        <!-- Nama Sapi Input -->
        <div>
          <label class="block text-gray-700">Nama Sapi:</label>
          <input v-model="namaSapi" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Umur Sapi Input -->
        <div>
          <label class="block text-gray-700">Umur Sapi:</label>
          <input v-model.number="umurSapi" type="number" min="0" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Submit Button -->
        <button type="submit" class="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </section>
  </div>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
