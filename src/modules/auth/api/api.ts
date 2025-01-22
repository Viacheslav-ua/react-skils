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
// {"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IlNsYXZhIiwiaWQiOjEsImlhdCI6MTczNzI3MjgzMywiZXhwIjoxNzM3MjczMTkzfQ.r4K_K5umZjVIGxpx7Jh0WDwLwU7Y808xKkjzr5bU5IQ"}
// {"statusCode":400,"message":"User with this login not found"}
// ["login - Allowed from 2 to 64 characters","password - Allowed from 2 to 64 characters"]