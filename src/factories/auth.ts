import {postAuthData, postData} from '../libs/axios.ts'


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
type ResetPassType = {
  code: string
  password: string
  confirmPassword: string
}

const apiUrl = import.meta.env.VITE_API_URL + '/auth'

export const registerUser = async (payload: RegisterType) => {
  return await postData(`${apiUrl}/register/user`, payload)
}
export const registerExpert = async (payload: RegisterType) => {
  return await postAuthData(`${apiUrl}/register/expert`, payload)
}
export const login = async (payload: LoginType) => {
  return await postData(`${apiUrl}/login`, payload)
}
export const recover = async (payload: { email: string }) => {
  return await postData(`${apiUrl}/recover`, payload)
}
export const resetPassword = async (payload: ResetPassType) => {
  return await postData(`${apiUrl}/reset-pass`, payload)
}