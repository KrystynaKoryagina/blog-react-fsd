import { StoreSchema } from '@/app/providers/store';

export const getProfileReadOnly = (state: StoreSchema) => state?.profile?.readOnly;
