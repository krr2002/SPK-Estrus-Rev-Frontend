import {getAuthData, postAuthData} from '@/libs/axios.ts'


export type DSSRunDataType = {
  specimenName: string
  age: number
  conditions: string[]
}
type ParamOptionDataType = {
  id: string
  name: string
  min: number
}
export type DSSParamDataType = {
  id: string
  name: string
  type: 'LINGUISTIC' | 'NUMERIC'
  options: ParamOptionDataType[]
}

const apiUrl = import.meta.env.VITE_API_URL + '/dss'

export const getAllDssParams = async () => {
  return await getAuthData(`${apiUrl}/params`)
}
export const run = async (payload: DSSRunDataType) => {
  return await postAuthData(`${apiUrl}/run`, payload)
}