<script setup lang="ts">
import { ref, watch } from 'vue';

// Sample parameter options (replace these with actual parameters from your data)
const availableParameters = ['Parameter 1', 'Parameter 2', 'Parameter 3'];

const numParameters = ref(0);
const parameters = ref<{ name: string; operand: 'AND' | 'OR' | '' }[]>([]);
const resultParameter = ref('');

// Watch the number of parameters to update the parameters array accordingly
watch(numParameters, (newCount) => {
  // Update the array size and clear operands
  parameters.value = Array(newCount).fill({ name: '', operand: '' });
});

// Function to handle form submission
const addBasisAturan = () => {
  if (numParameters.value > 0 && parameters.value.length > 0 && resultParameter.value) {
    // Handle adding the basis aturan (e.g., saving to a database or state)
    console.log('Parameters:', parameters.value);
    console.log('Result Parameter:', resultParameter.value);

    // Reset form
    numParameters.value = 0;
    parameters.value = [];
    resultParameter.value = '';
  }
};
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
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Add New Basis Aturan</h1>
      <form @submit.prevent="addBasisAturan" class="space-y-4">
        <!-- Number of Parameters Input -->
        <div>
          <label class="block text-gray-700">Number of Comparison Parameters:</label>
          <input v-model.number="numParameters" type="number" min="1" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Parameters Inputs -->
        <div v-for="(param, index) in parameters" :key="index" class="flex items-center space-x-2 mb-2">
          <select v-model="parameters[index].name" class="block w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
            <option value="" disabled>Select Parameter</option>
            <option v-for="p in availableParameters" :key="p" :value="p">{{ p }}</option>
          </select>
          <select v-if="index < numParameters - 1" v-model="parameters[index].operand" class="block w-1/4 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
            <option value="" disabled>Select Operand</option>
            <option value="AND">AND</option>
            <option value="OR">OR</option>
          </select>
          <button v-if="index < numParameters - 1" type="button" @click="parameters.splice(index, 1)" class="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded">Remove</button>
        </div>

        <!-- Result Parameter Input -->
        <div>
          <label class="block text-gray-700">Then Result Parameter:</label>
          <select v-model="resultParameter" class="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
            <option value="" disabled>Select Result Parameter</option>
            <option v-for="p in availableParameters" :key="p" :value="p">{{ p }}</option>
          </select>
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
