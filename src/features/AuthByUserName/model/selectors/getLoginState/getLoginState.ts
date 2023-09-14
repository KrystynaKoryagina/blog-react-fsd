import { StoreSchema } from '@/app/providers/store';

export const getLoginState = (state: StoreSchema) => state?.login;
