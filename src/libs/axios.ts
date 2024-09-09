import axios from 'axios'
import {AuthToken} from '@/utils/auth.ts'

const queryParamSetter = (query: any) => {
  let res = '?'
  Object.keys(query).forEach((key) => {
    res = `${res}${key}=${query[key]}&`
  })
  return res.substring(0, res.length - 1)
}

export const postData = async (url: string, payload: object, query: Object = {}) => {
  if (query && JSON.stringify(query) !== '{}') url = queryParamSetter(query)
  const res = await axios.post(url, payload, {validateStatus: () => true})
  if (res.status >= 200 && res.status < 300) return res.data
  throw res.data
}
export const getData = async (url: string, query: Object = {}) => {
  if (query && JSON.stringify(query) !== '{}') url = queryParamSetter(query)
  const res = await axios.get(url, {validateStatus: () => true})
  if (res.status >= 200 && res.status < 300) return res.data
  throw res.data
}
export const putData = async (url: string, payload: object, query: Object = {}) => {
  if (query && JSON.stringify(query) !== '{}') url = queryParamSetter(query)
  const res = await axios.put(url, payload, {validateStatus: () => true})
  if (res.status >= 200 && res.status < 300) return res.data
  throw res.data
}
export const delData = async (url: string, query: Object = {}) => {
  if (query && JSON.stringify(query) !== '{}') url = queryParamSetter(query)
  const res = await axios.delete(url, {validateStatus: () => true})
  if (res.status >= 200 && res.status < 300) return res.data
  throw res.data
}
export const postAuthData = async (url: string, payload: object, query: Object = {}) => {
  if (query && JSON.stringify(query) !== '{}') url = queryParamSetter(query)
  const res = await axios.post(url, payload, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${AuthToken.get()}`
    },
  })
  if (res.status >= 200 && res.status < 300) return res.data
  throw res.data
}
export const getAuthData = async (url: string, query: Object = {}) => {
  if (query && JSON.stringify(query) !== '{}') url = queryParamSetter(query)
  const res = await axios.get(url, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${AuthToken.get()}`
    },
  })
  if (res.status >= 200 && res.status < 300) return res.data
  throw res.data
}
export const putAuthData = async (url: string, payload: object, query: Object = {}) => {
  if (query && JSON.stringify(query) !== '{}') url = queryParamSetter(query)
  const res = await axios.put(url, payload, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${AuthToken.get()}`
    },
  })
  if (res.status >= 200 && res.status < 300) return res.data
  throw res.data
}
export const delAuthData = async (url: string, query: Object = {}) => {
  if (query && JSON.stringify(query) !== '{}') url = queryParamSetter(query)
  const res = await axios.delete(url, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${AuthToken.get()}`
    },
  })
  if (res.status >= 200 && res.status < 300) return res.data
  throw res.data
}