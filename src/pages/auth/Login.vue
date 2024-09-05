<script setup lang="ts">
  import {reactive} from "vue"
  import {useRouter} from 'vue-router'
  import {AuthToken} from "../../utils/auth.ts"
  import {login as facLogin} from "../../factories/auth.ts";

  const logingForm = reactive({
    credential: '',
    password: '',
  })

  const router = useRouter()
  const login = async () => {
    // Fungsi login yang dipanggil saat tombol login ditekan
    try {
      const res = await facLogin(logingForm)
      AuthToken.set(res.data.token)
      return router.push('/')
    } catch (err) {
      console.log(err)
    }
  }
</script>

<template>
  <section class="w-full min-h-screen flex">
    <!-- Sisi kiri dengan latar belakang biru -->
    <div class="flex-1 bg-blue-800 flex items-center justify-center">
      <!-- Gambar -->
      <img src="../../assets/Cow.png" alt="Tauri KAK CHIP" class="w-3/4 max-w-md object-fit"/>
    </div>
    <!-- Sisi kanan untuk form login -->
    <div class="flex-1 flex flex-col items-center justify-center">
      <h1 class="mb-8 text-3xl font-bold">Welcome to Tauri KAK CHIP!</h1>
      <div class="flex flex-col space-y-4 w-3/4 max-w-md">
        <form @submit.prevent="login" class="flex flex-col space-y-4">
          <!-- Input nomor WA/Email -->
          <input
            type="text"
            v-model="logingForm.credential"
            placeholder="Nomor HP / Email"
            class="px-4 py-2 rounded border border-gray-300"
          />
          <!-- Input password -->
          <input
            type="password"
            v-model="logingForm.password"
            placeholder="Password"
            class="px-4 py-2 rounded border border-gray-300"
          />
          <!-- Tombol login -->
          <button
            type="submit"
            class="bg-sky-800 hover:bg-sky-900 transition-colors px-12 py-2 rounded text-white">
            Login
          </button>
        </form>
        <!-- Tautan sign up dan forgot password -->
        <div class="flex justify-between mt-4">
          <RouterLink to="/register" class="text-blue-600 hover:underline">Sign Up</RouterLink>
          <RouterLink to="/recovery" class="text-blue-600 hover:underline">Forgot Password?</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
