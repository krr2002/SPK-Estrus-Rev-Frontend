<script setup lang="ts">

</script>

<template>
  <section class="w-full">
    <div class="flex justify-center">
      <button
        @click="() => $emit('goto', '')"
        class="bg-sky-800 hover:bg-sky-900 transition-colors px-12 py-2 rounded text-white">
        Keluar
      </button>
    </div>
  </section>
</template>