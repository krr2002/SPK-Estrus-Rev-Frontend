<script setup lang="ts">
import { ref, computed, watch } from 'vue';

// State for the form
const isParameter = ref(true); // Default to Parameter selected
const isParameterHasil = ref(false);
const parameterName = ref('');
const numValues = ref(0);
const parameterValues = ref<string[]>([]);
const hasilParameter = ref('');

// Watch the number of values to update the parameterValues array accordingly
watch(numValues, (newCount) => {
  // Update the array size to match the number of values
  parameterValues.value = Array(newCount).fill('');
});

// Function to handle form submission
const addParameter = () => {
  if (parameterName.value && parameterValues.value.length > 0) {
    // Handle adding the parameter and its values (e.g., saving to a database or state)
    console.log('Parameter Name:', parameterName.value);
    console.log('Values:', parameterValues.value);

    // Reset form
    parameterName.value = '';
    numValues.value = 0;
    parameterValues.value = [];
  }
};

const addParameterHasil = () => {
  if (hasilParameter.value) {
    // Handle adding the parameter hasil (e.g., saving to a database or state)
    console.log('Parameter Hasil:', hasilParameter.value);

    // Reset form
    hasilParameter.value = '';
  }
};

// Function to handle checkbox changes
const toggleCheckbox = (type: 'parameter' | 'parameter-hasil') => {
  if (type === 'parameter') {
    isParameter.value = true;
    isParameterHasil.value = false;
  } else if (type === 'parameter-hasil') {
    isParameter.value = false;
    isParameterHasil.value = true;
  }
};

// Computed property to enable the submit button
const isSubmitEnabled = computed(() => {
  return isParameter.value || isParameterHasil.value;
});
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
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Add New Basis Aturan</h1>
      <form @submit.prevent="isParameter ? addParameter() : addParameterHasil()" class="space-y-4">
        <!-- Checkboxes -->
        <div class="flex items-center space-x-4">
          <div>
            <input 
              type="checkbox" 
              id="parameter" 
              v-model="isParameter" 
              @change="toggleCheckbox('parameter')" 
              :checked="isParameter"
            />
            <label for="parameter" class="ml-2 text-gray-700">Parameter</label>
          </div>
          <div>
            <input 
              type="checkbox" 
              id="parameter-hasil" 
              v-model="isParameterHasil" 
              @change="toggleCheckbox('parameter-hasil')" 
              :checked="isParameterHasil"
            />
            <label for="parameter-hasil" class="ml-2 text-gray-700">Parameter Hasil</label>
          </div>
        </div>

        <!-- Conditional Parameter Inputs -->
        <div v-if="isParameter">
          <div>
            <label class="block text-gray-700">Parameter Name:</label>
            <input v-model="parameterName" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
          </div>

          <div>
            <label class="block text-gray-700">Number of Values:</label>
            <input v-model.number="numValues" type="number" min="0" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
          </div>

          <div>
            <label class="block text-gray-700">Values:</label>
            <div v-for="(value, index) in parameterValues" :key="index" class="flex items-center space-x-2 mb-2">
              <input v-model="parameterValues[index]" type="text" class="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" placeholder="" />
            </div>
          </div>
        </div>

        <!-- Conditional Parameter Hasil Input -->
        <div v-if="isParameterHasil">
          <div>
            <label class="block text-gray-700">Parameter Hasil:</label>
            <input v-model="hasilParameter" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
          </div>
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
