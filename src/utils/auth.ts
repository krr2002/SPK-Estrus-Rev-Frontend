export class AuthToken {
  private static instance: AuthToken|undefined
  private readonly token: string
  private readonly tokenData: any

  constructor(val: string) {
    console.log(val)
    this.token = val
    const bas64Url = val.split('.')[1]
    const base64 = bas64Url.replace(/-/g, '+').replace(/_/g, '/')
    const payload = atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join('')
    this.tokenData = JSON.parse(payload)
    const decoded = decodeURIComponent(payload)
    console.log(decoded)
  }

  static set = (val: string) => {
    AuthToken.instance = new AuthToken(val)
  }
  static get = () => {
    if (!AuthToken.instance) throw new Error('Auth undefined')
    return AuthToken.instance.token
  }
  static getData = (key: string) => {
    if (!AuthToken.instance) throw new Error('Auth undefined')
    return AuthToken.instance.tokenData[key]
  }
  static del = () => {
    AuthToken.instance = undefined
  }
}