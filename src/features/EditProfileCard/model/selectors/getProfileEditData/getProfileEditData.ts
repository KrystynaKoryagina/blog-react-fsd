import { StoreSchema } from '@/app/providers/store';

export const getProfileEditData = (state: StoreSchema) => state?.profile?.editData ?? null;
