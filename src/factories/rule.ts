import {delAuthData, getAuthData, postAuthData, putAuthData} from '../libs/axios.ts'


type UpdateDataType = {
  name: string
  linguisticCombo: string[]
  operator: 'AND'|'OR'
  result: string
}
export type RuleDataType = UpdateDataType & {
  id: string
}

const apiUrl = import.meta.env.VITE_API_URL + '/rule-management'

export const createRule = async (payload: UpdateDataType) => {
  return await postAuthData(`${apiUrl}`, payload)
}
export const getAllRules = async (): Promise<{data: RuleDataType[], message: string, count: number}> => {
  return await getAuthData(`${apiUrl}`)
}
export const getRuleById = async (id: string) => {
  return await getAuthData(`${apiUrl}/${id}`)
}
export const updateRule = async (id: string, payload: UpdateDataType) => {
  return await putAuthData(`${apiUrl}/${id}`, payload)
}
export const deleteRule = async (id: string) => {
  return await delAuthData(`${apiUrl}/${id}`)
}