import { StoreSchema } from '@/app/providers/store/types/store';

export const getUserAuthData = (state: StoreSchema) => state.user.authData;
