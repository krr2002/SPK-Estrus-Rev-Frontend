<script setup lang="ts">
  import {ref} from 'vue'
  import cowImg from '@/assets/Cow.png'
  import {useToaster} from '@/stores/toaster.ts'
  import {recover} from '@/factories/auth.ts'
  import {useRouter} from 'vue-router'


  const toaster = useToaster()
  const router = useRouter()
  const email = ref('')

  const sendPasswordReset = async () => {
    try {
      const res = await recover({email: email.value})
      toaster.notySuccess(res.message, `Kode dikirim ke ${email.value}, mohon cek inbox`)
      return router.push('/reset-password')
    } catch (err: any) {
      toaster.notyErr(err.message, err.data)
    }
  }
</script>

<template>
  <section class="w-full min-h-screen flex">
    <!-- Sisi kiri dengan latar belakang biru -->
    <div class="flex-1 bg-blue-800 flex items-center justify-center">
      <!-- Gambar -->
      <img :src="cowImg" alt="Tauri KAK CHIP" class="w-3/4 max-w-md"/>
    </div>
    <!-- Sisi kanan untuk form forgot password -->
    <div class="flex-1 flex flex-col items-center justify-center">
      <h1 class="mb-8 text-3xl font-bold">Mengembalikan Akses Akun</h1>
      <div class="flex flex-col space-y-4 w-3/4 max-w-md">
        <!-- Input email -->
        <div class="mb-4 w-full">
          <label class="w-full">
            <p class="mb-2">Email:</p>
            <input
              type="email"
              placeholder="Masukan Email anda"
              v-model="email"
              class="px-4 py-2 rounded border border-gray-300 w-full"
            />
          </label>
        </div>
        <!-- Tombol kirim password -->
        <button
          @click="sendPasswordReset"
          class="bg-sky-800 hover:bg-sky-900 transition-colors px-12 py-2 rounded text-white">
          Kirim Kode
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
