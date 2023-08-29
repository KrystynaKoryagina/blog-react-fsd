export interface User {
  id: string;
  username: string;
  role: UserRole;
  avatar?: string;
}

export const enum UserRole {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  USER = 'USER'
}
