import { createSelector } from 'reselect';
import { StoreSchema } from 'app/providers/store/types/store';
import { UserRole } from '../../types/user';

export const getUserRole = (state: StoreSchema) => state.user.authData?.role;

export const isUserAdmin = createSelector(getUserRole, (role) => role === UserRole.ADMIN);
export const isUserOwner = createSelector(getUserRole, (role) => role === UserRole.OWNER);
