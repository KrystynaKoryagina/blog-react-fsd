export interface LoginStore {
  username: string;
  password: string;
  isLoading: boolean;
  error?: string | null;
}

export interface LoginByUsernameRequest {
  username: string;
  password: string;
}
