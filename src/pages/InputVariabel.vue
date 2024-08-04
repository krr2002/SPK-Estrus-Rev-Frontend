<script setup lang="ts">
import { ref } from 'vue';

const namaSapi = ref('');
const perubahanAktifitas = ref('');
const suhu = ref('');
const frekuensiMenderau = ref('');
const perilakuMakan = ref('');
const perubahanBengkakVulva = ref('');
const kondisiVulvaKeluarLendirBening = ref('');
const phVagina = ref('');

const handleSubmit = () => {
  const data = {
    namaSapi: namaSapi.value,
    perubahanAktifitas: perubahanAktifitas.value,
    suhu: suhu.value,
    frekuensiMenderau: frekuensiMenderau.value,
    perilakuMakan: perilakuMakan.value,
    perubahanBengkakVulva: perubahanBengkakVulva.value,
    kondisiVulvaKeluarLendirBening: kondisiVulvaKeluarLendirBening.value,
    phVagina: phVagina.value,
  };
  console.log('Data submitted:', data);
  // Here you can add logic to handle the submitted data, such as sending it to an API or storing it in a state
};

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
      <button @click="$emit('goto', ' ')" class="bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded">
        Keluar
      </button>
    </nav>
    <section class="p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Input Variabel</h1>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-gray-700">Nama Sapi:</label>
          <input v-model="namaSapi" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>
        <div>
          <label class="block text-gray-700">Perubahan Aktifitas:</label>
          <input v-model="perubahanAktifitas" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>
        <div>
          <label class="block text-gray-700">Suhu:</label>
          <input v-model="suhu" type="number" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>
        <div>
          <label class="block text-gray-700">Frekuensi Menderau:</label>
          <input v-model="frekuensiMenderau" type="number" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>
        <div>
          <label class="block text-gray-700">Perilaku Makan:</label>
          <input v-model="perilakuMakan" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>
        <div>
          <label class="block text-gray-700">Perubahan Bengkak Vulva:</label>
          <input v-model="perubahanBengkakVulva" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>
        <div>
          <label class="block text-gray-700">Kondisi Vulva Keluar Lendir Bening:</label>
          <input v-model="kondisiVulvaKeluarLendirBening" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>
        <div>
          <label class="block text-gray-700">PH Vagina:</label>
          <input v-model="phVagina" type="number" step="0.1" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>
        <button type="submit" class="bg-sky-800 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
