export { User, UserRole } from './model/types/user';
export { UserStore } from './model/types/userStore';

export { userActions, userReducer } from './model/slice/userSlice';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { getUserRole, isUserAdmin, isUserOwner } from './model/selectors/getUserRole/getUserRole';
