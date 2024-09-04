<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

// Emit for navigation
const emit = defineEmits<{
  (e: 'goto', route: string): void;
}>();

// State for form data
const loginData = ref({
  identifier: '', // This can be either phone number or email
  password: ''
});

// Function for login
const login = async () => {
  try {
    const response = await axios.post('http://116.193.191.184:3030/v1/auth/login', {
      identifier: loginData.value.identifier,
      password: loginData.value.password
    });

    console.log('Login successful:', response.data);

    // Extract user role from the response
    const userRole = response.data.role; // Assume response has a 'role' field

    // Navigate based on user role
    switch (userRole) {
      case 'admin':
        emit('goto', 'admin-dashboard');
        break;
      case 'expert':
        emit('goto', 'expert-dashboard');
        break;
      case 'user':
        emit('goto', 'user-dashboard');
        break;
      default:
        console.error('Unknown user role:', userRole);
        break;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Login failed:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error('Login failed:', error.message);
    } else {
      console.error('Login failed:', error);
    }
  }
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
          v-model="loginData.identifier"
          type="text"
          placeholder="Nomor HP / Email"
          class="px-4 py-2 rounded border border-gray-300"
          required
        />
        <!-- Input password -->
        <input
          v-model="loginData.password"
          type="password"
          placeholder="Password"
          class="px-4 py-2 rounded border border-gray-300"
          required
        />
        <!-- Tombol login -->
        <button
          @click="login"
          class="bg-sky-800 hover:bg-sky-900 transition-colors px-12 py-2 rounded text-white">
          Login
        </button>
        <!-- Tautan sign up dan forgot password -->
        <div class="flex justify-between mt-4">
          <a href="#" @click="emit('goto', 'signup')" class="text-blue-600 hover:underline">Sign Up</a>
          <a href="#" @click="emit('goto', 'forgot-password')" class="text-blue-600 hover:underline">Forgot Password?</a>
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
