type AuthDataDto = {
  login: string
  password: string
}


export interface AuthStore {
  auth: AuthDataDto
  // isAuth: boolean
  // isLoading: boolean
  error: string | null
  
  login: (authData: AuthDataDto) => void;
  logout: () => void;

}

