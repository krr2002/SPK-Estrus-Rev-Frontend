import {delAuthData, getAuthData, postAuthData, putAuthData} from '@/libs/axios.ts'


export type UpdateParamType = {
  type: 'LINGUISTIC'|'NUMERIC'
  name: string
  note?: string
}
export type DSSParamType = {
  id: string
  name: string
}

const apiUrl = import.meta.env.VITE_API_URL + '/param-management'

export const createParam = async (payload: UpdateParamType) => {
  return await postAuthData(`${apiUrl}`, payload)
}
export const getAllParam = async () => {
  return await getAuthData(`${apiUrl}`)
}
export const getByParamId = async (id: string) => {
  return await getAuthData(`${apiUrl}/${id}`)
}
export const updateParam = async (id: string, payload: UpdateParamType) => {
  return await putAuthData(`${apiUrl}/${id}`, payload)
}
export const deleteParam = async (id: string) => {
  return await delAuthData(`${apiUrl}/${id}`)
}