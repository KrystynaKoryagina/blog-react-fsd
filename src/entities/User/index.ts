export type { User } from './model/types/user';
export type { UserStore } from './model/types/userStore';

export { UserRole } from './model/consts/user';
export { USER_MOCK } from './model/consts/user.mock';

export { userActions, userReducer } from './model/slice/userSlice';

export {
  useGetUserAuthData,
  getUserAuthData,
} from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export {
  getUserRole,
  isUserAdmin,
  isUserOwner,
} from './model/selectors/getUserRole/getUserRole';
export {
  useGetJsonSettings,
  getJsonSettings,
} from './model/selectors/getJsonSettings/getJsonSettings';

export {
  saveJsonSettings,
  useSaveJsonSettings,
} from './model/services/saveJsonSettings/saveJsonSettings';
