<script setup lang="ts">
  import {ref, onMounted} from 'vue'
  import Sidebar from '@/components/Sidebar.vue'
  import {deleteRule, getAllRules, RuleDataType} from '@/factories/rule.ts'
  import {getLangByIds} from '@/factories/linguistic.ts'
  import {useToaster} from '@/stores/toaster.ts'


  const toaster = useToaster()
  const rules = ref<RuleDataType[]>([])
  const langs = ref<any>({})

  onMounted(async () => {
    const res = await getAllRules()
    let langCombo: string[] = []
    for (const datum of res.data) {
      langCombo = [...langCombo, ...datum.linguisticCombo]
    }
    const langData = await getLangByIds({ids: langCombo})
    for (const datum of langData.data) {
      langs.value[datum.langId.replaceAll('-', '')] = datum
    }
    rules.value = res.data
  })

  const generateLang = (operator: 'AND'|'OR', combo: string[]) => {
    const arr: string[] = []
    for (const item of combo) {
      arr.push(`${langs.value[item]?.paramName} ${langs.value[item]?.langName}`)
    }
    return arr.join(` ${operator} `)
  }

  const delRule = async (key: number) => {
    try {
      const res = await deleteRule(rules.value[key].id)
      toaster.notySuccess(res.message)
      rules.value.filter((_, idx) => idx !== key)
    } catch (err: any) {
      toaster.notyErr(err.message, err.data)
    }
  }
</script>

<template>
  <main class="w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <section class="p-6 flex-1 flex flex-col">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Basis Aturan</h1>
      <!-- Button at the top-right corner of the table -->
      <div class="mb-4 flex justify-end">
        <RouterLink to="/rule-management/add" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Buat Baru
        </RouterLink>
      </div>
      <!-- Table with dummy data -->
      <div class="flex-1 overflow-auto">
        <table v-if="rules.length > 0" class="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead class="bg-gray-100 text-gray-800">
            <tr>
              <th class="p-3 text-left">Basis Aturan</th>
              <th class="p-3 text-left">Logic</th>
              <th class="p-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in rules" :key="index" class="border-b">
              <td class="p-3">{{ item.name }}</td>
              <td class="p-3">{{ generateLang(item.operator, item.linguisticCombo) }} THEN {{ item.result }}</td>
              <td class="p-3 flex justify-end space-x-2">
                <!-- Action Buttons -->
                <RouterLink :to="`/rule-management/edit/${item.id}`" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Edit
                </RouterLink>
                <button @click="() => delRule(index)" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="pt-40 text-center">
          <p>Mohon maaf, basis aturan belum ada</p>
          <p>Silahkan <RouterLink to="/farm-management/add" class="text-blue-600">buat kondisi baru</RouterLink></p>
        </div>
      </div>
    </section>
  </main>
</template>
