<script setup lang="ts">
import { ref } from 'vue';

// State for account data
const namaAkun = ref('');
const role = ref('user');
const nik = ref('');
const email = ref('');
const noHp = ref('');
const alamat = ref('');
const distrik = ref('');
const kelurahan = ref('');

// Function to handle form submission
const addAccount = () => {
  if (namaAkun.value && role.value && nik.value && email.value && noHp.value && alamat.value && distrik.value && kelurahan.value) {
    // Handle adding the account data (e.g., saving to a database or state)
    console.log('Nama Akun:', namaAkun.value);
    console.log('Role:', role.value);
    console.log('NIK:', nik.value);
    console.log('Email:', email.value);
    console.log('No HP:', noHp.value);
    console.log('Alamat:', alamat.value);
    console.log('Distrik:', distrik.value);
    console.log('Kelurahan:', kelurahan.value);

    // Reset form
    namaAkun.value = '';
    role.value = 'user';
    nik.value = '';
    email.value = '';
    noHp.value = '';
    alamat.value = '';
    distrik.value = '';
    kelurahan.value = '';
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
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Add Account</h1>
      <form @submit.prevent="addAccount" class="space-y-4">
        <!-- Nama Akun Input -->
        <div>
          <label class="block text-gray-700">Nama Akun:</label>
          <input v-model="namaAkun" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Role Dropdown -->
        <div>
          <label class="block text-gray-700">Role:</label>
          <select v-model="role" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
            <option value="user">User</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        <!-- NIK Input -->
        <div>
          <label class="block text-gray-700">NIK:</label>
          <input v-model="nik" type="text" maxlength="16" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Email Input -->
        <div>
          <label class="block text-gray-700">Email:</label>
          <input v-model="email" type="email" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- No HP Input -->
        <div>
          <label class="block text-gray-700">No HP:</label>
          <input v-model="noHp" type="text" maxlength="12" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Alamat Input -->
        <div>
          <label class="block text-gray-700">Alamat:</label>
          <textarea v-model="alamat" rows="3" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"></textarea>
        </div>

        <!-- Distrik Input -->
        <div>
          <label class="block text-gray-700">Distrik:</label>
          <input v-model="distrik" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Kelurahan Input -->
        <div>
          <label class="block text-gray-700">Kelurahan:</label>
          <input v-model="kelurahan" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
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
