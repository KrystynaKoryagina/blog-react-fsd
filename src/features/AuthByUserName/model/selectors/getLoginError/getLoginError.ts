import { StoreSchema } from 'app/providers/store';

export const getLoginError = (state: StoreSchema) => state?.login?.error;
