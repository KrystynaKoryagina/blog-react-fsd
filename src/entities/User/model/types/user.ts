import { UserRole } from '../consts/user';

export interface User {
  id: string;
  username: string;
  role: UserRole;
  avatar?: string;
}
