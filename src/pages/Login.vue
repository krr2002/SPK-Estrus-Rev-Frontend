<script setup lang="ts">

</script>

<template>
  <section class="w-full my-20">
    <div class="flex justify-center my-8">
      <h1>Welcome to Tauri KAK CHIP!</h1>
    </div>
    <div class="flex justify-center">
      <button
        @click="() => $emit('goto', 'dashboard')"
        class="bg-sky-800 hover:bg-sky-900 transition-colors px-12 py-2 rounded text-white">
        Masuk Dashboard
      </button>
    </div>
  </section>
</template>