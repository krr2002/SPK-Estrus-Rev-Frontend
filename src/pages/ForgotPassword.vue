<script setup lang="ts">
  import {ref} from 'vue'


  const email = ref('')

  const emit = defineEmits<{
    (e: 'goto', route: string): void;
  }>()

  const sendPasswordReset = () => {
    // Function called when the "Send Password Reset" button is pressed
    emit('goto', 'reset-link-sent'); // Replace 'reset-link-sent' with the desired route after the reset link is sent
  }
</script>

<template>
  <section class="w-full min-h-screen flex">
    <!-- Sisi kiri dengan latar belakang biru -->
    <div class="flex-1 bg-blue-800 flex items-center justify-center">
      <!-- Gambar -->
      <img src="../assets/Cow.png" alt="Tauri KAK CHIP" class="w-3/4 max-w-md"/>
    </div>
    <!-- Sisi kanan untuk form forgot password -->
    <div class="flex-1 flex flex-col items-center justify-center">
      <h1 class="mb-8 text-3xl font-bold">Forgot Password</h1>
      <div class="flex flex-col space-y-4 w-3/4 max-w-md">
        <!-- Input email -->
        <input
          type="email"
          placeholder="Enter your email"
          class="px-4 py-2 rounded border border-gray-300"
        />
        <!-- Tombol kirim password -->
        <button
          @click="sendPasswordReset"
          class="bg-sky-800 hover:bg-sky-900 transition-colors px-12 py-2 rounded text-white">
          Send Password
        </button>
        <!-- Tautan kembali ke login -->
        <div class="mt-4">
          <RouterLink to="/login" class="text-blue-600 hover:underline">Kembali</RouterLink>
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
