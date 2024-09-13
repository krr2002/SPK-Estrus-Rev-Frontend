<script setup lang="ts">
  import {ref, onMounted} from 'vue'
  import Sidebar from '@/components/Sidebar.vue'
  import {createLang, deleteLang, getAllByParamId, updateLang} from '@/factories/linguistic.ts'
  import {LINGUISTIC, NUMERIC} from '@/libs/const.ts'
  import {createParam, getByParamId, updateParam, UpdateParamType} from '@/factories/param.ts'
  import {useRoute, useRouter} from 'vue-router'
  import {useToaster} from '@/stores/toaster.ts'

  type FuzzySetType = {
    id: string
    name: string
    min: number
    max: number
  }

  const router = useRouter()
  const route = useRoute()
  const toaster = useToaster()

  const editPos = ref<number|undefined>()
  const fuzzySets = ref<FuzzySetType[]>([])
  const paramData = ref<UpdateParamType & {id: string}>({
    id: '',
    name: '',
    type: LINGUISTIC,
    note: '',
  })

  onMounted(() => {
    if (route.params.id) return init()
  })

  const init = async () => {
    try {
      const res = await getByParamId(route.params.id as string)
      paramData.value = res.data
      const langData = await getAllByParamId(route.params.id as string)
      fuzzySets.value = langData.data
      toaster.notySuccess(langData.message)
    } catch (err: any) {
      console.error(err)
    }
  }
  const addFuzzySet = () => {
    fuzzySets.value.push({
      id: '',
      name: '',
      min: 0,
      max: 99,
    })
    editPos.value = fuzzySets.value.length - 1
  }
  const saveFuzzySet = async (key: number) => {
    const payload = {
      name: fuzzySets.value[key].name,
      min: fuzzySets.value[key].min,
      paramId: paramData.value.id,
    }
    try {
      let res
      if (paramData.value.id === '') {
        await saveParameter(false)
        payload.paramId = paramData.value.id
      }
      if (fuzzySets.value[key].id === '') {
        res = await createLang(payload)
        fuzzySets.value[key].id = res.data.id
      } else {
        res = await updateLang(fuzzySets.value[key].id, payload)
      }
      toaster.notySuccess(res.message)
      editPos.value = undefined
    } catch (err: any) {
      toaster.notyErr(err.message, err.data)
    }
  }
  const deleteFuzzySet = async (key: number) => {
    if (fuzzySets.value[key].id === '') {
      fuzzySets.value = fuzzySets.value.filter((item) => item !== fuzzySets.value[key])
      editPos.value = undefined
      return
    }
    try {
      const res = await deleteLang(fuzzySets.value[key].id)
      toaster.notySuccess(res.message)
      editPos.value = undefined
    } catch (err: any) {
      toaster.notyErr(err.message, err.data)
    }
  }
  const saveParameter = async (finished = true) => {
    const payload = {
      name: paramData.value.name,
      type: paramData.value.type,
      note: paramData.value.note,
    }
    try {
      let res
      if (paramData.value.id === '') {
        res = await createParam(payload)
        paramData.value.id = res.data.id
      } else {
        res = await updateParam(paramData.value.id, payload)
      }
      toaster.notySuccess(res.message)
    } catch (err: any) {
      toaster.notyErr(err.message, err.data)
    }
    if (finished) return router.push('/param-management')
  }
</script>

<template>
  <main class="w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <section class="p-6 flex-1 flex flex-col">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Parameter</h1>
      <div class="space-y-4">
        <!-- Conditional Parameter Inputs -->
        <div class="mb-16">
          <div class="mb-4">
            <label>
              <p class="block text-gray-700">Nama Parameter:</p>
              <input v-model="paramData.name" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
            </label>
          </div>
          <div class="mb-4">
            <label>
              <p class="block text-gray-700">Tipe Parameter (Tipe yang muncul saat input fakta):</p>
              <select v-model="paramData.type" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm">
                <option :value="LINGUISTIC">Linguistik</option>
                <!-- <option :value="NUMERIC">Numerik</option> -->
              </select>
            </label>
          </div>
          <div class="mb-4">
            <label>
              <p class="block text-gray-700">Catatan (Opsional, sebagai pentunjuk penginputan fakta):</p>
              <textarea v-model="paramData.note" rows="3" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
            </label>
          </div>
          <div v-for="(item, key) in fuzzySets" :key="key" class="mb-4 flex items-end gap-16">
            <label>
              <p class="block text-gray-700">Atribut Linguistik:</p>
              <input :disabled="editPos !== key" v-model="item.name" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
            </label>
            <!-- <label>
              <p class="block text-gray-700">Nilai minimal:</p>
              <input :disabled="editPos !== key" v-model="item.min" type="number" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
            </label>
            <label> -->
              <p class="block text-gray-700">Nilai maksimal:</p>
              <input :disabled="editPos !== key" v-model="item.max" type="number" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
            </label>
            <div class="flex gap-4">
              <button v-if="editPos === key" @click="saveFuzzySet(key)" class="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded">
                Simpan
              </button>
              <button v-else @click="editPos = key" class="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded">
                Edit
              </button>
              <button @click="deleteFuzzySet(key)" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                Hapus
              </button>
            </div>
          </div>
          <button @click="addFuzzySet" type="button" class="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded">
            Tambah Himpunan Fuzzy
          </button>
        </div>

        <!-- Submit Button -->
        <button v-if="!editPos" @click="() => saveParameter(true)" type="button" class="bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded">
          Simpan Parameter
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
