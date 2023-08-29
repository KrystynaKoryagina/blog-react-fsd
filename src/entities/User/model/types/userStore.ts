import { User } from './user';

export interface UserStore {
  authData: User | null;
  _inited: boolean
}
