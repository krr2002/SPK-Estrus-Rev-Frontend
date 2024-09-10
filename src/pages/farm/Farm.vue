<script setup lang="ts">
  import {ref, onMounted} from 'vue'
  import Sidebar from '@/components/Sidebar.vue'
  import {AuthToken} from '@/utils/auth.ts'
  import {ROLE_ADMIN} from '@/libs/const.ts'
  import {DSSResultDataType, getAllHistories, getHistoriesByCreator} from '@/factories/history.ts'


  const isAdmin = AuthToken.getData('roleId').replaceAll('-', '') === ROLE_ADMIN

  const farms = ref<DSSResultDataType[]>([])

  onMounted(async () => {
    return init()
  })

  const init = async () => {
    try {
      if (isAdmin) {
        const res = await getAllHistories()
        farms.value = res.data
      } else {
        const res = await getHistoriesByCreator()
        farms.value = res.data
      }
    } catch (err) {
      console.error(err)
    }
  }
</script>

<template>
  <main class="w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <section class="p-6 flex-1 flex flex-col">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Ternak</h1>
      <!-- Buttons at the top-right corner of the table -->
      <div class="mb-4 flex justify-end space-x-2">
        <RouterLink to="/farm-management/add" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Teliti Ternak Baru
        </RouterLink>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Cetak
        </button>
      </div>
      <!-- Table with dummy data -->
      <div class="flex-1 overflow-auto">
        <table v-if="farms.length > 0" class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-gray-100 text-gray-800">
          <tr>
            <th class="p-3 text-left">Nama</th>
            <th class="p-3 text-left">Umur</th>
            <th class="p-3 text-left">Hasil</th>
            <th class="p-3 text-left"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(ternak, index) in farms" :key="index" class="border-b">
            <td class="p-3">{{ ternak.name }}</td>
            <td class="p-3">{{ ternak.age }}</td>
            <td class="p-3">{{ ternak.dssResult }}</td>
            <td class="p-3 flex justify-end">
              <!-- Actions Buttons -->
              <button v-if="isAdmin" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                Delete
              </button>
            </td>
          </tr>
          </tbody>
        </table>
        <div v-else class="pt-40 text-center">
          <p>Mohon maaf, belum ada ternak yang diteliti</p>
          <p>Silahkan <RouterLink to="/farm-management/add" class="text-blue-600">mulai meneliti ternak</RouterLink></p>
        </div>
      </div>
    </section>
  </main>
</template>
