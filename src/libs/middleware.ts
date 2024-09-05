import {AuthToken} from '../utils/auth.ts'


export const authRouter = () => {
  try {
    AuthToken.set('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlSWQiOiIwOGVhZWUzNC1jYzRkLTRhYWQtYjk1YS03ZTBlMDc3ZWZiMzQiLCJuaWsiOiI5MTcxMDIyMjEyOTUwMDAyIiwiZnVsbE5hbWUiOiJSSVpLWSBBRE1JTiIsImVtYWlsIjoicml6a3lAYWRtaW4uaWQiLCJwaG9uZSI6Iis2MjgxMzQ0NjMxNDMzIiwiY291bnRyeSI6IklORE9ORVNJQSIsInByb3ZpbmNlIjoiUEFQVUEgU0VMQVRBTiIsImNpdHkiOiJLQUJVUFRFTiBNRVJBVUtFIiwiZGlzdHJpY3QiOiJNRVJBVUtFIiwic3ViZGlzdHJpY3QiOiJSSU1CQSBKQVlBIiwiYWRkcmVzcyI6IkpMLiBLQU1JWkFVTiIsInBhc3N3b3JkIjoiIiwidG9rZW5SZXNldCI6IiIsImxhc3RBY2Nlc3NlZCI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyNC0wOS0wNVQxMDoxNDoxOS4wNzBaIiwidXBkYXRlZEF0IjoiMjAyNC0wOS0wNVQxMDoxNDoxOS4wNzBaIiwiZGVsZXRlZEF0IjpudWxsLCJyb2xlTmFtZSI6IkFETUlOIiwiaWF0IjoxNzI1NTMxMzkwfQ.rSgPxdMK6P8Bj-JcKBiGu1crjRW09hf1VJaYq8yfBf8')
    const token = AuthToken.get()
    if (token === '') throw 'Token not found'
  } catch {
    return '/login'
  }
}