import {delAuthData, getAuthData, putAuthData} from '@/libs/axios.ts'


type UpdateDataType = {
  nik: string
  fullName: string
  district: string
  subdistrict: string
  address: string
}

const apiUrl = import.meta.env.VITE_API_URL + '/user'

export const getAllNonAdminUsers = async () => {
  return await getAuthData(`${apiUrl}`)
}
export const getById = async (id: string) => {
  return await getAuthData(`${apiUrl}/${id}`)
}
export const updateUser = async (id: string, payload: UpdateDataType) => {
  return await putAuthData(`${apiUrl}/${id}`, payload)
}
export const deleteUser = async (id: string) => {
  return await delAuthData(`${apiUrl}/${id}`)
}