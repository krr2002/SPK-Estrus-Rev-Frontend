export class AuthToken {
  private static instance: AuthToken|undefined
  private readonly token: any

  constructor(val: string) {
    this.token = val
  }

  static set = (val: string) => {
    AuthToken.instance = new AuthToken(val)
  }
  static get = () => {
    if (!AuthToken.instance) throw new Error('Auth undefined')
    return AuthToken.instance.token
  }
  static del = () => {
    AuthToken.instance = undefined
  }
}