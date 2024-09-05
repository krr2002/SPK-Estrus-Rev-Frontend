import {AuthToken} from '../utils/auth.ts'


export const authRouter = () => {
  try {
    // const token = AuthToken.get()
    // if (token === '') throw 'Token not found'
  } catch {
    return '/login'
  }
}