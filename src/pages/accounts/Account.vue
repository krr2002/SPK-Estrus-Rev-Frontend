<script setup lang="ts">
  import {onMounted, ref} from 'vue'
  import Sidebar from '@/components/Sidebar.vue'
  import {deleteUser, getAllNonAdminUsers} from '@/factories/user.ts'
  import {useRouter} from 'vue-router'
  import {useToaster} from '@/stores/toaster.ts'


  type UserDataType = {
    id: string
    fullName: string
    roleName: string
  }

  const router = useRouter()
  const toaster = useToaster()
  const accounts = ref<UserDataType[]>([])

  onMounted(async () => {
    try {
      const res = await getAllNonAdminUsers()
      accounts.value = res.data
    } catch (err: any) {
      toaster.notyErr(err.message, err.data)
    }
  })

  // Function to handle the edit button click
  const editAccount = (id: string) => {
    return router.push(`/account-management/edit/${id}`)
  }

  // Function to handle the delete button click
  const deleteAccount = async (id: string) => {
    try {
      const res = await deleteUser(id)
      accounts.value = accounts.value.filter((item) => item.id !== id)
      toaster.notySuccess(res.message)
    } catch (err: any) {
      toaster.notyErr(err.message, err.data)
    }
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
          Buat Baru
        </RouterLink>
      </div>
      <!-- Table with dummy data -->
      <div class="flex-1 overflow-auto">
        <table v-if="accounts.length > 0" class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-gray-100 text-gray-800">
            <tr>
              <th class="p-3 text-left">Nama Akun</th>
              <th class="p-3 text-left">Hak Akses</th>
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
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="pt-40 text-center">
          <p>Mohon maaf, belum ada akun yang terdaftar</p>
          <p>Silahkan <RouterLink to="/account-management/add" class="text-blue-600">buat akun baru</RouterLink></p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Optional scoped styles */
</style>
