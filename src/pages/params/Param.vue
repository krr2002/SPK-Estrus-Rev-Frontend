<script setup lang="ts">
  import {onMounted, ref} from 'vue'
  import Sidebar from '@/components/Sidebar.vue'
  import {deleteParam, DSSParamType, getAllParam} from '@/factories/param.ts'


  const dssParams = ref<DSSParamType[]>([])

  onMounted(async () => {
    try {
      const res = await getAllParam()
      dssParams.value = res.data
    } catch (err) {
      console.error(err)
    }
  })

  // Function to handle the delete button click
  const deleteParameter = async (key: string) => {
    try {
      const res = await deleteParam(key)
      console.log(res.message)
    } catch (err) {
      console.error(err)
    }
  }
</script>

<template>
  <main class="w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <section class="p-6 flex-1">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Parameter</h1>
      <!-- New button at the top-right corner of the table -->
      <div class="mb-4 flex justify-end">
        <RouterLink to="/param-management/add" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Buat Baru
        </RouterLink>
      </div>
      <!-- Table with dummy data -->
      <div class="flex-1 overflow-auto">
        <table v-if="dssParams.length > 0" class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-gray-100 text-gray-800">
            <tr>
              <th class="p-3 text-left">Parameter</th>
              <th class="p-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="param in dssParams" :key="param.id" class="border-b">
              <td class="p-3">{{ param.name }}</td>
              <td class="p-3 flex justify-end space-x-2">
                <RouterLink :to="`/param-management/edit/${param.id}`" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Edit
                </RouterLink>
                <button @click="deleteParameter(param.id)" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="pt-40 text-center">
          <p>Mohon maaf, belum ada parameter yang terdaftar</p>
          <p>Silahkan <RouterLink to="/param-management/add" class="text-blue-600">buat parameter baru</RouterLink></p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Optional scoped styles */
</style>
