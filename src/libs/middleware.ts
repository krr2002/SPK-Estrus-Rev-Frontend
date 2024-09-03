import {AuthToken} from '../utils/auth.ts'


export const authRouter = (to, from) => {
  try {
    const token = AuthToken.get()
    if (token === '') throw 'Token not found'
  } catch {
    return '/login'
  }
}