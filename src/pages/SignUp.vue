<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

// Emit untuk navigasi
const emit = defineEmits<{
  (e: 'goto', route: string): void;
}>();

// State untuk form data
const formData = ref({
  NIK: '',
  Nama: '',
  Email: '',
  NoHP: '',
  Alamat: '',
  Distrik: '',
  Kelurahan: '',
  // tambahkan field lain sesuai kebutuhan
});

// Fungsi untuk submit form
const signup = async () => {
  try {
    // Tambahkan kode negara ke nomor HP
    const phoneNumber = `+62${formData.value.NoHP}`;
    const dataToSend = { ...formData.value, NoHP: phoneNumber };

    const response = await axios.post('http://116.193.191.184:3030/v1/auth/register/user', dataToSend);
    console.log('Pendaftaran user berhasil:', response.data);
    emit('goto', 'signup-success');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Pendaftaran user gagal:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error('Pendaftaran user gagal:', error.message);
    } else {
      console.error('Pendaftaran user gagal:', error);
    }
  }
};
</script>

<template>
  <section class="w-full h-screen flex">
    <!-- Sisi kiri dengan latar belakang biru -->
    <div class="w-1/2 bg-blue-800 flex items-center justify-center">
      <!-- Gambar -->
      <img src="../assets/Cow.png" alt="Tauri KAK CHIP" class="w-3/4 max-w-sm"/>
    </div>
    <!-- Sisi kanan untuk form sign up -->
    <div class="w-1/2 flex flex-col items-center justify-center p-6">
      <h1 class="mb-4 text-2xl font-bold">Sign Up for Tauri KAK CHIP!</h1>
      <div class="flex flex-col space-y-2 w-full max-w-sm">
        <!-- Input NIK -->
        <div class="flex flex-col">
          <label for="nik" class="text-sm">NIK:</label>
          <input
            id="nik"
            v-model="formData.NIK"
            type="text"
            placeholder="NIK"
            maxlength="16"
            class="px-3 py-2 rounded border border-gray-300 text-sm"
            required
          />
        </div>
        <!-- Input Nama -->
        <div class="flex flex-col">
          <label for="nama" class="text-sm">Nama:</label>
          <input
            id="nama"
            v-model="formData.Nama"
            type="text"
            placeholder="Nama"
            class="px-3 py-2 rounded border border-gray-300 text-sm"
            required
          />
        </div>
        <!-- Input Email -->
        <div class="flex flex-col">
          <label for="email" class="text-sm">Email:</label>
          <input
            id="email"
            v-model="formData.Email"
            type="email"
            placeholder="Email"
            class="px-3 py-2 rounded border border-gray-300 text-sm"
            required
          />
        </div>
        <!-- Input No HP -->
        <div class="flex flex-col">
          <label for="nohp" class="text-sm">No HP:</label>
          <div class="flex">
            <span class="px-3 py-2 bg-gray-200 border border-gray-300 rounded-l text-sm">+62</span>
            <input
              id="nohp"
              v-model="formData.NoHP"
              type="text"
              placeholder="Nomor HP"
              maxlength="11"
              class="px-3 py-2 rounded-r border border-gray-300 text-sm"
              required
            />
          </div>
        </div>
        <!-- Input Alamat -->
        <div class="flex flex-col">
          <label for="alamat" class="text-sm">Alamat:</label>
          <textarea
            id="alamat"
            v-model="formData.Alamat"
            placeholder="Alamat"
            rows="2"
            class="px-3 py-2 rounded border border-gray-300 text-sm"
            required
          ></textarea>
        </div>
        <!-- Input Distrik -->
        <div class="flex flex-col">
          <label for="distrik" class="text-sm">Distrik:</label>
          <input
            id="distrik"
            v-model="formData.Distrik"
            type="text"
            placeholder="Distrik"
            class="px-3 py-2 rounded border border-gray-300 text-sm"
            required
          />
        </div>
        <!-- Input Kelurahan -->
        <div class="flex flex-col">
          <label for="kelurahan" class="text-sm">Kelurahan:</label>
          <input
            id="kelurahan"
            v-model="formData.Kelurahan"
            type="text"
            placeholder="Kelurahan"
            class="px-3 py-2 rounded border border-gray-300 text-sm"
            required
          />
        </div>
        <!-- Tombol sign up -->
        <button
          @click="signup"
          class="bg-sky-800 hover:bg-sky-900 transition-colors px-8 py-2 rounded text-white text-sm mt-2">
          Sign Up
        </button>
        <!-- Tautan kembali ke login -->
        <div class="mt-2">
          <a href="#" @click="emit('goto', 'login')" class="text-blue-600 hover:underline text-sm">Already have an account? Login</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Customize the image and form styles as needed */
img {
  object-fit: cover;
}
</style>
