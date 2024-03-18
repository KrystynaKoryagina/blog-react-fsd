import { StoreSchema } from '@/app/providers/store';
import { buildSelector } from '@/shared/lib/store';

export const [useGetProfileData, getProfileData] = buildSelector(
  (state: StoreSchema) => state?.profile?.data,
);
