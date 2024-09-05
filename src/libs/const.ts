export const ROLE_ADMIN = '08eaee34cc4d4aadb95a7e0e077efb34'
export const ROLE_EXPERT = 'b00b1f244d8f43a3805927ee48ac76f0'
export const ROLE_USER = '3b1898e783f6475fa4398b5c5ccadafd'

export const IS_ROLE_ADMIN = (val: string) => {
  return val.toLowerCase().replaceAll('-', '') === ROLE_ADMIN
}
export const IS_ROLE_EXPERT = (val: string) => {
  return val.toLowerCase().replaceAll('-', '') === ROLE_EXPERT
}
export const IS_ROLE_USER = (val: string) => {
  return val.toLowerCase().replaceAll('-', '') === ROLE_USER
}