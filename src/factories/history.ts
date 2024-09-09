import {delAuthData, getAuthData} from '@/libs/axios.ts'


export type DSSResultDataType = {
  id: string
  name: string
  age: number
  condition: object
  dssResult: string
  createdBy: string
  createdAt: string
}

const apiUrl = import.meta.env.VITE_API_URL + '/result-history'

export const getAllHistories = async () => {
  return await getAuthData(`${apiUrl}`)
}
export const getHistoriesByCreator = async () => {
  return await getAuthData(`${apiUrl}/creator`)
}
export const getHistoryById = async (id: string) => {
  return await getAuthData(`${apiUrl}/${id}`)
}
export const deleteHistory = async (id: string) => {
  return await delAuthData(`${apiUrl}/${id}`)
}