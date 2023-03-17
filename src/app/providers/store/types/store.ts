import { UserStore } from 'entities/User';
import { LoginStore } from 'features/AuthByUserName';

export interface Store {
  user: UserStore,
  login: LoginStore,
}
