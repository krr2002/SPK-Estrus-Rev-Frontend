<script setup lang="ts">
  import {reactive, ref} from 'vue'
  import {ROLE_EXPERT, ROLE_USER} from '@/libs/const.ts'
  import {registerExpert, registerUser} from '@/factories/auth.ts'
  import Sidebar from '@/components/Sidebar.vue'
  import {useRouter} from 'vue-router'


  const router = useRouter()

  // State for account data
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
  const role = ref(ROLE_USER)

  // Function to handle form submission
  const addAccount = async () => {
    let res
    try {
      if (role.value === ROLE_USER) {
        res = await registerUser(registerForm)
      } else {
        res = await registerExpert(registerForm)
      }
      console.log(res.message)
      return router.push('/account-management')
    } catch (err) {
      console.error(err.message)
    }
  }
</script>

<template>
  <main class="w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <section class="p-6 flex-1 flex flex-col">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Add Account</h1>
      <form @submit.prevent="addAccount" class="space-y-4">
        <!-- Nama Akun Input -->
        <div>
          <label class="block text-gray-700">Nama Lengkap:</label>
          <input v-model="registerForm.fullName" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Role Dropdown -->
        <div>
          <label class="block text-gray-700">Role:</label>
          <select v-model="role" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
            <option :value="ROLE_USER">User</option>
            <option :value="ROLE_EXPERT">Expert</option>
          </select>
        </div>

        <!-- NIK Input -->
        <div>
          <label class="block text-gray-700">NIK:</label>
          <input v-model="registerForm.nik" type="text" maxlength="16" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Email Input -->
        <div>
          <label class="block text-gray-700">Email:</label>
          <input v-model="registerForm.email" type="email" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- No HP Input -->
        <div>
          <label class="block text-gray-700">No HP:</label>
          <input v-model="registerForm.phone" type="text" maxlength="16" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Password Input -->
        <div>
          <label class="block text-gray-700">Password:</label>
          <input v-model="registerForm.password" type="password" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Confirm Password Input -->
        <div>
          <label class="block text-gray-700">Konfirmasi Password:</label>
          <input v-model="registerForm.confirmPassword" type="password" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Alamat Input -->
        <div>
          <label class="block text-gray-700">Alamat:</label>
          <textarea v-model="registerForm.address" rows="3" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"></textarea>
        </div>

        <!-- Distrik Input -->
        <div>
          <label class="block text-gray-700">Distrik:</label>
          <input v-model="registerForm.district" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Kelurahan Input -->
        <div>
          <label class="block text-gray-700">Kelurahan:</label>
          <input v-model="registerForm.subdistrict" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Submit Button -->
        <button type="submit" class="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </section>
  </main>
</template>
