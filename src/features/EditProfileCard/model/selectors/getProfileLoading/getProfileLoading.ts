import { StoreSchema } from '@/app/providers/store';

export const getProfileLoading = (state: StoreSchema) => state?.profile?.isLoading;
