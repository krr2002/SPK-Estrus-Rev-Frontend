<script setup lang="ts">
const emit = defineEmits<{
  (e: 'goto', route: string): void;
}>();
</script>

<template>
  <section class="w-full min-h-screen flex">
    <!-- Sisi kiri dengan latar belakang biru -->
    <div class="flex-1 bg-blue-800 flex items-center justify-center">
      <!-- Gambar -->
      <img src="../assets/Cow.png" alt="Tauri KAK CHIP" class="w-3/4 max-w-md"/>
    </div>
    <!-- Sisi kanan untuk tombol -->
    <div class="flex-1 flex flex-col items-center justify-center">
      <h1 class="mb-8 text-3xl font-bold">Welcome to Tauri KAK CHIP!</h1>
      <div class="flex flex-col space-y-4">
        <button
          @click="() => emit('goto', 'admin')"
          class="bg-sky-800 hover:bg-sky-900 transition-colors px-12 py-2 rounded text-white">
          Login as Admin
        </button>
        <button
          @click="() => emit('goto', 'expert')"
          class="bg-sky-800 hover:bg-sky-900 transition-colors px-12 py-2 rounded text-white">
          Login as Pakar
        </button>
        <button
          @click="() => emit('goto', 'user')"
          class="bg-sky-800 hover:bg-sky-900 transition-colors px-12 py-2 rounded text-white">
          Login as User
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Customize the image and button styles as needed */
img {
  object-fit: cover;
}
</style>
