<script setup lang="ts">
  import {ref} from 'vue'
  import cowImg from '@/assets/Cow.png'
  import {useToaster} from '@/stores/toaster.ts'
  import {resetPassword} from '@/factories/auth.ts'
  import {useRouter} from 'vue-router'


  const toaster = useToaster()
  const router = useRouter()
  const payload = ref({
    code: '',
    password: '',
    confirmPassword: '',
  })

  const sendPasswordReset = async () => {
    try {
      const res = await resetPassword(payload.value)
      toaster.notySuccess(res.message, 'Password berhasil direset, silahkan login menggunakan password baru!')
      return router.push('/login')
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
      <h1 class="mb-8 text-3xl font-bold">Reset Password</h1>
      <div class="flex flex-col space-y-4 w-3/4 max-w-md">
        <div class="mb-4 w-full">
          <label class="w-full">
            <p class="mb-2">Kode:</p>
            <input
                type="email"
                placeholder="Masukan Kode yang Anda terima via email"
                v-model="payload.code"
                class="px-4 py-2 rounded border border-gray-300 w-full"
            />
          </label>
        </div>
        <div class="mb-4 w-full">
          <label class="w-full">
            <p class="mb-2">Password:</p>
            <input
                type="password"
                placeholder="Masukan password Anda"
                v-model="payload.password"
                class="px-4 py-2 rounded border border-gray-300 w-full"
            />
          </label>
        </div>
        <div class="mb-4 w-full">
          <label class="w-full">
            <p class="mb-2">Konfirmasi Password:</p>
            <input
                type="password"
                placeholder="Masukan Password Anda kembali"
                v-model="payload.confirmPassword"
                class="px-4 py-2 rounded border border-gray-300 w-full"
            />
          </label>
        </div>
        <!-- Tombol kirim password -->
        <button
          @click="sendPasswordReset"
          class="bg-sky-800 hover:bg-sky-900 transition-colors px-12 py-2 rounded text-white">
          Reset Password
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
