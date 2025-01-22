export interface User {
  id:	number
  login:	string
  password:	string
  email:	string
  banned:	boolean
  banReason:	string
  createdAt:	string
  updatedAt:	string
}

export interface UserSchema {
  authData?: User

}