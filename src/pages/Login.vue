<script setup lang="ts">
const emit = defineEmits<{
  (e: 'goto', route: string): void;
}>();

const login = () => {
  // Fungsi login yang dipanggil saat tombol login ditekan
  emit('goto', 'dashboard');
};
</script>

<template>
  <section class="w-full min-h-screen flex">
    <!-- Sisi kiri dengan latar belakang biru -->
    <div class="flex-1 bg-blue-800 flex items-center justify-center">
      <!-- Gambar -->
      <img src="../assets/Cow.png" alt="Tauri KAK CHIP" class="w-3/4 max-w-md"/>
    </div>
    <!-- Sisi kanan untuk form login -->
    <div class="flex-1 flex flex-col items-center justify-center">
      <h1 class="mb-8 text-3xl font-bold">Welcome to Tauri KAK CHIP!</h1>
      <div class="flex flex-col space-y-4 w-3/4 max-w-md">
        <!-- Input nomor WA/Email -->
        <input
          type="text"
          placeholder="Nomor WA / Email"
          class="px-4 py-2 rounded border border-gray-300"
        />
        <!-- Input password -->
        <input
          type="password"
          placeholder="Password"
          class="px-4 py-2 rounded border border-gray-300"
        />
        <!-- Tombol login -->
        <button
          @click="login"
          class="bg-sky-800 hover:bg-sky-900 transition-colors px-12 py-2 rounded text-white">
          Login
        </button>
        <!-- Tautan sign up dan forgot password -->
        <div class="flex justify-between mt-4">
          <a href="#" class="text-blue-600 hover:underline">Sign Up</a>
          <a href="#" class="text-blue-600 hover:underline">Forgot Password?</a>
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
