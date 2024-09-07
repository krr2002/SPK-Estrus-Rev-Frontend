import {delAuthData, getAuthData, postAuthData, putAuthData} from '@/libs/axios.ts'



const apiUrl = import.meta.env.VITE_API_URL + '/param-management'

export const createParam = async (payload: {name: string}) => {
  return await postAuthData(`${apiUrl}`, payload)
}
export const getAllParam = async () => {
  return await getAuthData(`${apiUrl}`)
}
export const getByParamId = async (id: string) => {
  return await getAuthData(`${apiUrl}/${id}`)
}
export const updateParam = async (id: string, payload: {name: string}) => {
  return await putAuthData(`${apiUrl}/${id}`, payload)
}
export const deleteParam = async (id: string) => {
  return await delAuthData(`${apiUrl}/${id}`)
}