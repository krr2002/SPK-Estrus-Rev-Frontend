import {getData} from '../libs/axios.ts'

const apiUrl = import.meta.env.VITE_API_URL + '/user'

export const getAllNonAdminUsers = async () => {
  return await getData(`${apiUrl}`)
}