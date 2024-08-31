<script setup lang="ts">
import { ref } from 'vue';

// Dummy data, replace this with data from your store or API
const userData = ref({
  nik: '1234567890123456',
  nama: 'John Doe',
  email: 'johndoe@example.com',
  nohp: '08123456789',
  alamat: 'Jl. Raya No. 1',
  distrik: 'Distrik 1',
  kelurahan: 'Kelurahan A',
});

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
      <button @click="$emit('goto', 'admin-akun')" class="hover:bg-sky-900 transition-colors px-4 py-2 rounded">
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
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Profil</h1>
      <!-- Profile Information -->
      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="mb-4">
          <strong class="text-gray-700">NIK:</strong>
          <p>{{ userData.nik }}</p>
        </div>
        <div class="mb-4">
          <strong class="text-gray-700">Nama:</strong>
          <p>{{ userData.nama }}</p>
        </div>
        <div class="mb-4">
          <strong class="text-gray-700">Email:</strong>
          <p>{{ userData.email }}</p>
        </div>
        <div class="mb-4">
          <strong class="text-gray-700">No HP:</strong>
          <p>{{ userData.nohp }}</p>
        </div>
        <div class="mb-4">
          <strong class="text-gray-700">Alamat:</strong>
          <p>{{ userData.alamat }}</p>
        </div>
        <div class="mb-4">
          <strong class="text-gray-700">Distrik:</strong>
          <p>{{ userData.distrik }}</p>
        </div>
        <div class="mb-4">
          <strong class="text-gray-700">Kelurahan:</strong>
          <p>{{ userData.kelurahan }}</p>
        </div>
        
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
