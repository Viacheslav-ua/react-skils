import { User } from "entities/user/model/type"
import { jsonApiInstance } from "shared/api/api-instance"
import { ENDPOINT } from "shared/constants/api-routes"

interface LoginByUsernameDto {
  login: string
  password: string
}
export const authApi = {
  loginByUsername: (authData: LoginByUsernameDto) => {
    return jsonApiInstance(ENDPOINT.LOGIN, {
      method: 'POST',
      json: authData,
    })
  },

  // registration: (authData: LoginByUsernameDto) => {

  // },

  // refresh: () => {

  // },
}
