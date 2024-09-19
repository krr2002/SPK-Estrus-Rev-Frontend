<script setup lang="ts">
  import {useRouter} from 'vue-router'
  import {registerUser} from '@/factories/auth.ts'
  import {reactive} from 'vue'
  import {useToaster} from '@/stores/toaster.ts'


  const toaster = useToaster()
  const {push} = useRouter()

  const registerForm = reactive({
    nik: '',
    fullName: '',
    email: '',
    phone: '',
    district: '',
    subdistrict: '',
    address: '',
    password: '',
    confirmPassword: '',
  })
  const signup = async () => {
    // Function called when the Sign-Up button is pressed
    try {
      await registerUser(registerForm)
      return push('/login')
    } catch (err: any) {
      toaster.notyErr(err.message, err.data)
    }
  }
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
        <form @submit.prevent="signup" class="flex flex-col space-y-2">
          <!-- Input NIK -->
          <div class="flex flex-col">
            <label for="nik" class="text-sm">NIK:</label>
            <input
              type="text"
              placeholder="NIK"
              maxlength="16"
              minlength="16"
              v-model="registerForm.nik"
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
              v-model="registerForm.fullName"
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
              v-model="registerForm.email"
              class="px-3 py-2 rounded border border-gray-300 text-sm"
            />
          </div>
          <!-- Input No HP -->
          <div class="flex flex-col">
            <label for="nohp" class="text-sm">No HP:</label>
            <input
              id="nohp"
              type="text"
              placeholder="No HP"
              maxlength="16"
              v-model="registerForm.phone"
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
              v-model="registerForm.address"
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
              v-model="registerForm.district"
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
              v-model="registerForm.subdistrict"
              class="px-3 py-2 rounded border border-gray-300 text-sm"
            />
          </div>
          <!-- Input Password -->
          <div class="flex flex-col">
            <label for="kelurahan" class="text-sm">Password:</label>
            <input
                type="password"
                placeholder="Passowrd"
                v-model="registerForm.password"
                class="px-3 py-2 rounded border border-gray-300 text-sm"
            />
          </div>
          <!-- Input Confirm Password -->
          <div class="flex flex-col">
            <label for="kelurahan" class="text-sm">Confirm Password:</label>
            <input
                type="password"
                placeholder="Confirm Password"
                v-model="registerForm.confirmPassword"
                class="px-3 py-2 rounded border border-gray-300 text-sm"
            />
          </div>
          <!-- Tombol sign up -->
          <button
            type="submit"
            class="bg-sky-800 hover:bg-sky-900 transition-colors px-8 py-2 rounded text-white text-sm mt-2">
            Sign Up
          </button>
        </form>
        <!-- Tautan kembali ke login -->
        <p class="mt-2">
          Already have an account? <RouterLink to="/login" class="text-blue-600 hover:underline text-sm">Login</RouterLink>
        </p>
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
