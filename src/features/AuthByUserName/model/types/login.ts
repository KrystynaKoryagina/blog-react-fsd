export interface LoginStore {
  username: string;
  password: string;
  isLoading: boolean;
  error?: string;
}

export interface LoginByUsernameRequest {
  username: string;
  password: string;
}
