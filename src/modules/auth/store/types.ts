type AuthDto = {
  name: string;
  password: string;
  isLoading: boolean;
  error?: string;
}

export interface AuthStore {
  auth: AuthDto;
  
  login: (name: string, password: string) => void;
  logout: () => void;
}

