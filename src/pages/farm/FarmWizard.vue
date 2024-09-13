<script setup lang="ts">
  import {onMounted, ref} from 'vue'
  import Sidebar from '@/components/Sidebar.vue'
  import {DSSParamDataType, DSSRunDataType, getAllDssParams, run} from '@/factories/dss.ts'
  import {useToaster} from '@/stores/toaster.ts'


  const toaster = useToaster()
  const params = ref<DSSParamDataType[]>([])
  const specimen = ref<DSSRunDataType>({
    specimenName: '',
    age: 0,
    conditions: [],
  })
  const result = ref('')

  onMounted(() => {
    return init()
  })

  const init = async () => {
    try {
      const res = await getAllDssParams()
      params.value = res.data
    } catch (err: any) {
      console.error(err)
    }
  }

  const numericChanged = (val: string, paramId: string, idx: number) => {
    const valFloat = parseFloat(val.replace(',', '.'))
    const param = params.value.find((item) => item.id === paramId)
    if (!param) return toaster.notyWarn('INPUT_ERROR', 'param not found')
    const sortedOptions = param.options.sort((a, b) => b.min - a.min)
    const res = sortedOptions.find(option => valFloat >= option.min)
    if (!res) return toaster.notyWarn('INPUT_ERROR', 'option not found')
    specimen.value.conditions[idx] = res.id
  }

  const runDss = async () => {
    specimen.value.conditions = specimen.value.conditions.filter((item) => item !== '')
    try {
      const res = await run(specimen.value)
      result.value = res.data[0]
      toaster.notySuccess(res.message)
    } catch (err: any) {
      toaster.notyErr(err.message, err.data)
    }
  }
</script>

<template>
  <main class="w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <section class="p-6 flex-1 flex flex-col">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Ternak</h1>
      <section class="space-y-4">
        <!-- Nama Sapi Input -->
        <div>
          <label>
            <p class="block text-gray-700">Nama Sapi:</p>
            <input v-model="specimen.specimenName" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
          </label>
        </div>

        <!-- Umur Sapi Input -->
        <div>
          <label>
            <p class="block text-gray-700">Umur Sapi (dalam bulan):</p>
            <input v-model="specimen.age" type="number" min="0" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
          </label>
        </div>

        <div v-for="(param, key) in params" :key="key">
          <label>
            <p class="block text-gray-700">{{ param.name }}:</p>
            <input v-if="param.type === 'NUMERIC'" @change="(e: any) => numericChanged(e.target.value, param.id, key)" type="number" min="0" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
            <select v-else v-model="specimen.conditions[key]" class="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
              <option value="" selected>Tidak diketahui</option>
              <option v-for="item in param.options.sort((a, b) => b.min - a.min)" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
          </label>
        </div>
        <div>
          <p>Hasil: {{ result }}</p>
        </div>

        <!-- Submit Button -->
        <button @click="runDss" type="submit" class="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded">
          Submit
        </button>
      </section>
    </section>
  </main>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
