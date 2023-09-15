export type { User } from './model/types/user';
export type { UserStore } from './model/types/userStore';

export { UserRole } from './model/consts/user';

export { userActions, userReducer } from './model/slice/userSlice';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { getUserRole, isUserAdmin, isUserOwner } from './model/selectors/getUserRole/getUserRole';
