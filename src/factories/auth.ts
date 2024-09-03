import {Vardec} from '../utils/vardec.ts'
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

const apiUrl = `${Vardec.getString("application.apiUrl")}/auth`

export const registerUser = async (payload: RegisterType) => {
  return await postData(`${apiUrl}/register/user`, payload)
}
export const registerAdmin = async (payload: RegisterType) => {
  return await postData(`${apiUrl}/register/admin`, payload)
}
export const registerExpert = async (payload: RegisterType) => {
  return await postData(`${apiUrl}/register/expert`, payload)
}
export const login = async (payload: RegisterType) => {
  return await postData(`${apiUrl}/login`, payload)
}