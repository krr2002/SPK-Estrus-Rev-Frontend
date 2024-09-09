<script setup lang="ts">
import {onMounted, ref} from 'vue'
  import {ROLE_EXPERT, ROLE_USER} from '@/libs/const.ts'
  import {registerExpert, registerUser} from '@/factories/auth.ts'
  import Sidebar from '@/components/Sidebar.vue'
import {useRoute, useRouter} from 'vue-router'
import {getById, updateUser} from '@/factories/user.ts'


  const router = useRouter()
  const route = useRoute()

  // State for account data
  const registerForm = ref({
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

  onMounted(() => {
    if (route.params.id) return getUserData()
  })

  const getUserData = async () => {
    try {
      const res = await getById(route.params.id as string)
      registerForm.value = res.data
      role.value = res.data.roleId
    } catch (err) {
      console.error(err)
    }
  }

  // Function to handle form submission
  const addAccount = async () => {
    let res
    try {
      if (role.value === ROLE_USER) {
        res = await registerUser(registerForm.value)
      } else {
        res = await registerExpert(registerForm.value)
      }
      console.log(res.message)
      return router.push('/account-management')
    } catch (err: any) {
      console.error(err.message)
    }
  }

  // Function to handle form submission
  const updateAccount = async () => {
    try {
      const res = await updateUser(route.params.id as string, registerForm.value)
      console.log(res.message)
      return router.push('/account-management')
    } catch (err: any) {
      console.error(err.message)
    }
  }

  const submitForm = () => {
    if (route.params.id) return updateAccount()
    return addAccount()
  }
</script>

<template>
  <main class="w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <section class="p-6 flex-1 flex flex-col">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Add Account</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <!-- Nama Akun Input -->
        <div>
          <label class="block text-gray-700">Nama Lengkap:</label>
          <input v-model="registerForm.fullName" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </div>

        <!-- Role Dropdown -->
        <label v-if="!route.params.id">
          <p class="block text-gray-700">Role:</p>
          <select v-model="role" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
            <option :value="ROLE_USER">User</option>
            <option :value="ROLE_EXPERT">Expert</option>
          </select>
        </label>

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
        <label v-if="!route.params.id">
          <label class="block text-gray-700">Password:</label>
          <input v-model="registerForm.password" type="password" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </label>

        <!-- Confirm Password Input -->
        <label v-if="!route.params.id">
          <p class="block text-gray-700">Konfirmasi Password:</p>
          <input v-model="registerForm.confirmPassword" type="password" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
        </label>

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
