export enum AccountType {
  ANONYMOUS = 'ANONYMOUS',
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface AccountModel {
  id: string
  loginId: string
  name: string
  type: AccountType
}
