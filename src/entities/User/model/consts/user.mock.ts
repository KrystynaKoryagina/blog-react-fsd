import { User } from '../types/user';
import { UserRole } from './user';

export const USER_MOCK: User = {
  id: '1',
  username: 'admin',
  role: UserRole.ADMIN,
};
