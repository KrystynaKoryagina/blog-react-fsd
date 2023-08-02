import { StoreSchema } from 'app/providers/store';

export const getProfileData = (state: StoreSchema) => state?.profile?.data || null;
