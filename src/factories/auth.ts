import {postData} from '../libs/axios.ts'

type RegisterType = {
  nik: string
  fullName: string
  email: string
  phone: string
  district: string
  subdistrict: string
  address: string
  password: string
  confirmPassword: string
}

type LoginType = {
  credential: string
  password: string
}

const apiUrl = import.meta.env.VITE_API_URL + '/auth'

export const registerUser = async (payload: RegisterType) => {
  return await postData(`${apiUrl}/register/user`, payload)
}
export const registerExpert = async (payload: RegisterType) => {
  return await postData(`${apiUrl}/register/expert`, payload)
}
export const login = async (payload: LoginType) => {
  return await postData(`${apiUrl}/login`, payload)
}