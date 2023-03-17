import { Store } from 'app/providers/store';

export const getUserAuthData = (state: Store) => state.user.authData;
