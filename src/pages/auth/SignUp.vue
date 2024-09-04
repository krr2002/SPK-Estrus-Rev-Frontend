<script setup lang="ts">
const emit = defineEmits<{
  (e: 'goto', route: string): void;
}>();

const signup = () => {
  // Function called when the Sign-Up button is pressed
  emit('goto', 'signup-success'); // Replace 'signup-success' with the desired route after successful sign-up
};
</script>

<template>
  <section class="w-full h-screen flex">
    <!-- Sisi kiri dengan latar belakang biru -->
    <div class="w-1/2 bg-blue-800 flex items-center justify-center">
      <!-- Gambar -->
      <img src="../../assets/Cow.png" alt="Tauri KAK CHIP" class="w-3/4 max-w-sm"/>
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
            type="number"
            placeholder="NIK"
            maxlength="16"
            class="px-3 py-2 rounded border border-gray-300 text-sm"
          />
        </div>
        <!-- Input Nama -->
        <div class="flex flex-col">
          <label for="nama" class="text-sm">Nama:</label>
          <input
            id="nama"
            type="text"
            placeholder="Nama"
            class="px-3 py-2 rounded border border-gray-300 text-sm"
          />
        </div>
        <!-- Input Email -->
        <div class="flex flex-col">
          <label for="email" class="text-sm">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            class="px-3 py-2 rounded border border-gray-300 text-sm"
          />
        </div>
        <!-- Input No HP -->
        <div class="flex flex-col">
          <label for="nohp" class="text-sm">No HP:</label>
          <input
            id="nohp"
            type="number"
            placeholder="No HP"
            maxlength="12"
            class="px-3 py-2 rounded border border-gray-300 text-sm"
          />
        </div>
        <!-- Input Alamat -->
        <div class="flex flex-col">
          <label for="alamat" class="text-sm">Alamat:</label>
          <textarea
            id="alamat"
            placeholder="Alamat"
            rows="2"
            class="px-3 py-2 rounded border border-gray-300 text-sm"
          ></textarea>
        </div>
        <!-- Input Distrik -->
        <div class="flex flex-col">
          <label for="distrik" class="text-sm">Distrik:</label>
          <input
            id="distrik"
            type="text"
            placeholder="Distrik"
            class="px-3 py-2 rounded border border-gray-300 text-sm"
          />
        </div>
        <!-- Input Kelurahan -->
        <div class="flex flex-col">
          <label for="kelurahan" class="text-sm">Kelurahan:</label>
          <input
            id="kelurahan"
            type="text"
            placeholder="Kelurahan"
            class="px-3 py-2 rounded border border-gray-300 text-sm"
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
