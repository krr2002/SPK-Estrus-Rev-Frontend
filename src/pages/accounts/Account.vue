<script setup lang="ts">
  import {onMounted, ref} from 'vue'
  import Sidebar from '@/components/Sidebar.vue'
import {getAllNonAdminUsers} from '@/factories/user.ts'


  type UserDataType = {
    id: string
    fullName: string
    roleName: string
  }
  // Dummy data for accounts
  const accounts = ref<UserDataType[]>([])

  onMounted(async () => {
    try {
      const res = await getAllNonAdminUsers()
      accounts.value = res.data
    } catch (err) {
      console.error(err)
    }
  })

  // Function to handle the edit button click
  const editAccount = (index: string) => {
    console.log('Edit Account at index', index)
  }

  // Function to handle the delete button click
  const deleteAccount = (index: string) => {
    accounts.value.splice(index, 1)
  }

</script>

<template>
  <div class="w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <section class="p-6 flex-1">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Manajemen Akun</h1>
      <!-- New button at the top-right corner of the table -->
      <div class="mb-4 flex justify-end">
        <RouterLink to="/account-management/add" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          New
        </RouterLink>
      </div>
      <!-- Table with dummy data -->
      <div class="flex-1 overflow-auto">
        <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-gray-100 text-gray-800">
            <tr>
              <th class="p-3 text-left">Nama Akun</th>
              <th class="p-3 text-left">Role</th>
              <th class="p-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="account in accounts" :key="account.id" class="border-b">
              <td class="p-3">{{ account.fullName }}</td>
              <td class="p-3">{{ account.roleName }}</td>
              <td class="p-3 flex justify-end space-x-2">
                <!-- Action Buttons -->
                <button @click="editAccount(account.id)" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Edit
                </button>
                <button @click="deleteAccount(account.id)" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Optional scoped styles */
</style>
