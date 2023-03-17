export interface User {
  id: string;
  username: string;
}

export interface UserStore {
  authData: User | null;
}
