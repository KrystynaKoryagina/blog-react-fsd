import { StoreSchema } from 'app/providers/store';

export const getProfileValidateErrors = (state: StoreSchema) => state?.profile?.validateErrors;
