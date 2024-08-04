<script setup lang="ts">
import { ref } from 'vue';

// Variabel untuk form
const variable1 = ref('');
const variable2 = ref('');
const operator = ref('and'); // Default operator

const navigateTo = (route: string) => {
  $emit('goto', route);
};
</script>

<template>
  <div class="w-full min-h-screen bg-gray-100">
    <nav class="bg-sky-800 text-white p-4 flex justify-end items-center space-x-4">
      <button @click="() => $emit('goto', 'dashboard')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Dashboard
      </button>
      <button @click="() => $emit('goto', 'input-variabel')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Input Variabel
      </button>
      <button @click="() => $emit('goto', 'input-aturan')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Input Aturan
      </button>
      <button @click="() => $emit('goto', 'profil')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
        Profil
      </button>
      <button @click="() => navigateTo('')" class="bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded">
        Keluar
      </button>
    </nav>
    <section class="p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Input Aturan</h1>
      <form class="space-y-4">
        <div class="flex items-center space-x-4">
          <div class="flex-1">
            <label class="block text-gray-700">Variabel 1:</label>
            <input v-model="variable1" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
          </div>
          <div>
            <label class="block text-gray-700">Operator:</label>
            <select v-model="operator" class="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
              <option value="and">AND</option>
              <option value="or">OR</option>
            </select>
          </div>
          <div class="flex-1">
            <label class="block text-gray-700">Variabel 2:</label>
            <input v-model="variable2" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
          </div>
        </div>
        <button type="submit" class="bg-sky-800 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
