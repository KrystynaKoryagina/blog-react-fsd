import { StoreSchema } from '@/app/providers/store';

export const getProfileError = (state: StoreSchema) => state?.profile?.error;
