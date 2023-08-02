export interface User {
  id: string;
  username: string;
  avatar?: string;
}

export interface UserStore {
  authData: User | null;
  _inited: boolean
}
