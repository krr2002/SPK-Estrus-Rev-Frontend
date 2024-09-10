<script setup lang="ts">
  import {onMounted, ref} from 'vue'
  import Sidebar from '@/components/Sidebar.vue'
  import {DSSParamType, getAllParam} from '@/factories/param.ts'
  import {createRule, getRuleById, RuleDataType, updateRule} from '@/factories/rule.ts'
  import {DSSAllDataType, getAllByParamId, getLangByIds, LangResponseDTO} from '@/factories/linguistic.ts'
  import {useRoute, useRouter} from 'vue-router'


  const router = useRouter()
  const route = useRoute()

  const editPos = ref<number|null>(null)
  const params = ref<DSSParamType[]>([])
  const langs = ref<LangResponseDTO[]>([])
  const combos = ref<DSSAllDataType[]>([])
  const rule = ref<RuleDataType>({
    id: '',
    name: '',
    linguisticCombo: [],
    operator: 'AND',
    result: '',
  })

  onMounted(async () => {
    await getParams()
    if (route.params.id) await init()
  })

  const init = async () => {
    try {
      const res = await getRuleById(route.params.id as string)
      rule.value = res.data
      const langData = await getLangByIds({ids: rule.value.linguisticCombo})
      combos.value = langData.data
      console.log(res.message)
    } catch (err) {
      console.error(err)
    }
  }
  const getParams = async () => {
    try {
      const res = await getAllParam()
      params.value = res.data
    } catch (err) {
      console.error(err)
    }
  }
  const getLangs = async (paramId: string) => {
    try {
      const res = await getAllByParamId(paramId)
      langs.value = res.data
      console.log(res.message)
    } catch (err) {
      console.error(err)
    }
  }
  const addCombo = () => {
    combos.value.push({
      paramId: '',
      langId: '',
      paramName: '',
      langName: '',
    })
    editPos.value = combos.value.length - 1
  }
  const setParam = (idx: number, id: string) => {
    combos.value[idx].paramId = id
    return getLangs(id)
  }
  const saveRule = async () => {
    rule.value.linguisticCombo = combos.value.map((item) => {
      return item.langId
    })
    const payload = {
      name: rule.value.name,
      result: rule.value.result,
      operator: rule.value.operator,
      linguisticCombo: rule.value.linguisticCombo,
    }
    try {
      let res
      if (route.params.id) {
        res = await updateRule(route.params.id as string, payload)
      } else {
        res = await createRule(payload)
      }
      console.log(res.message)
      return router.push('/rule-management')
    } catch (err) {
      console.error(err)
    }
  }
</script>

<template>
  <main class="w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <section class="p-6 flex-1 flex flex-col">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Basis Aturan</h1>
      <div class="space-y-4">
        <div class="mb-4">
          <label>
            <p class="block text-gray-700">Nama Basis Aturan:</p>
            <input v-model="rule.name" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
          </label>
        </div>
        <div class="mb-4">
          <label>
            <p class="block text-gray-700">Operator:</p>
            <select v-model="rule.operator" class="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
              <option value="AND">AND</option>
              <option value="OR" disabled>OR</option>
            </select>
          </label>
        </div>
        <!-- Parameters Inputs -->
        <div v-for="(combo, index) in combos" :key="index" class="flex items-center space-x-2 mb-2">
          <div v-if="editPos === index" class="flex items-center space-x-2">
            <select @change="(e: any) => setParam(index, e.target.value)" v-model="combo.paramId" class="block w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
              <option value="" disabled>Pilih Parameter</option>
              <option v-for="p in params" :key="p.id" :value="p.id">{{ p.name }}</option>
            </select>
            <select v-model="combo.langId" class="block w-1/4 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
              <option value="" disabled>Pilih Atribut Linguistik</option>
              <option v-for="l in langs" :key="l.id" :value="l.id">{{ l.name }}</option>
            </select>
          </div>
          <div v-else>
            Jika {{ combo.paramName }} {{ combo.langName }} {{  index < combos.length - 1 ? rule.operator : '' }}
          </div>
          <button v-if="editPos === index" type="button" @click="editPos = null" class="bg-sky-800 hover:bg-sky-900 text-white px-2 py-1 rounded">Simpan</button>
          <button v-else type="button" @click="editPos = index" class="bg-sky-800 hover:bg-sky-900 text-white px-2 py-1 rounded">Edit</button>
          <button type="button" @click="combos.splice(index, 1)" class="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded">Remove</button>
        </div>
        <button @click="addCombo" type="button" class="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded">
          Tambah Aturan
        </button>

        <!-- Result Parameter Input -->
        <div class="mb-4">
          <label>
            <p class="block text-gray-700">Maka hasilnya:</p>
            <input v-model="rule.result" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
          </label>
        </div>

        <!-- Submit Button -->
        <button @click="saveRule" type="button" class="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded">
          Simpan
        </button>
      </div>
    </section>
  </main>
</template>
