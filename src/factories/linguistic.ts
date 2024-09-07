import {delAuthData, getAuthData, postAuthData, putAuthData} from '@/libs/axios.ts'


type UpdateLangType = {
  name: string
  minValue: number
}
type CreateLangType = UpdateLangType & {
  paramId: string
}

const apiUrl = import.meta.env.VITE_API_URL + '/lang-management'

export const createLang = async (payload: CreateLangType) => {
  return await postAuthData(`${apiUrl}`, payload)
}
export const getAllByParamId = async (paramId: string) => {
  return await getAuthData(`${apiUrl}/${paramId}`)
}
export const updateLang = async (id: string, payload: UpdateLangType) => {
  return await putAuthData(`${apiUrl}/${id}`, payload)
}
export const deleteLang = async (id: string) => {
  return await delAuthData(`${apiUrl}/${id}`)
}